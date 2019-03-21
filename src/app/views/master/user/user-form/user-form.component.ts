import { Component, OnInit } from "@angular/core";
import { CustomValidators } from "ng2-validation";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { UserService } from "src/app/shared/services/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { RoleService } from "src/app/shared/services/role.service";
import { BranchService } from "src/app/shared/services/branch.service";

@Component({
  selector: "app-basic-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"]
})
export class UserFormComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  data;
  id;
  name;
  email;
  password;
  password_confirmation;
  branch_id;
  role;
  roles: any[];
  branches: any[];
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private roleService: RoleService,
    private branchService: BranchService
  ) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      id: [""],
      name: ["", Validators.required],
      email: ["", Validators.required],
      password: ["kosong"],
      password_confirmation: ["kosong"],
      branch_id: ["", Validators.required],
      role: ["", Validators.required]
    });

    this.userService
      .showUser(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.userForm.setValue({
          id: data["data"].id,
          name: data["data"].name,
          email: data["data"].email,
          password: "kosong",
          password_confirmation: "kosong",
          branch_id: data["data"].branch_id,
          role: data["data"].role
        });
      });

    this.roleService.getRoles().subscribe((res: any) => {
      this.roles = res["data"];
    });

    this.branchService.getBranches().subscribe((res: any) => {
      this.branches = res["data"];
    });
  }

  buildFormBasic() {
    this.formBasic = this.fb.group({
      experience: []
    });
  }

  submit() {
    if (this.userForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.userService
        .updateUser(
          this.activatedRoute.snapshot.params["id"],
          this.userForm.value
        )
        .subscribe((res: any) => {
          setTimeout(() => {
            this.loading = false;
            if (res["status"] === "200") {
              this.toastr.success(res["message"], "Success!", {
                progressBar: true
              });
              this.router.navigateByUrl("master/user");
            } else {
              this.toastr.error(res["message"], "Error!", {
                progressBar: true
              });
            }
          }, 3000);
        });
    }
  }
}

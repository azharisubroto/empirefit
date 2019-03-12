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
import { Router } from "@angular/router";
import { RoleService } from "src/app/shared/services/role.service";
import { BranchService } from "src/app/shared/services/branch.service";

@Component({
  selector: "app-basic-form",
  templateUrl: "./user-create.component.html",
  styleUrls: ["./user-create.component.scss"]
})
export class UserCreateComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  data;
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
    private roleService: RoleService,
    private branchService: BranchService
  ) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      password_confirmation: ["", Validators.required],
      branch_id: [1, Validators.required],
      role: ["cs", Validators.required]
    });

    this.roleService.getRoles().subscribe((res: any) => {
      this.roles = res["data"];
    });

    this.branchService.getBranches().subscribe((res: any) => {
      this.branches = res["data"];
    });
  }

  submit() {
    if (this.userForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.userService.createUser(this.userForm.value).subscribe((res: any) => {
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

import { Component, OnInit } from "@angular/core";
import { CustomValidators } from "ng2-validation";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router, ActivatedRoute } from "@angular/router";
import { RoleService } from "src/app/shared/services/role.service";

@Component({
  selector: "app-basic-form",
  templateUrl: "./role-form.component.html",
  styleUrls: ["./role-form.component.scss"]
})
export class RoleFormComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  data;
  id;
  name;
  display_name;
  description;
  roleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private roleService: RoleService
  ) {}

  ngOnInit() {
    this.roleForm = this.fb.group({
      id: [""],
      name: ["", Validators.required],
      display_name: ["", Validators.required],
      description: []
    });

    this.roleService
      .showRole(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.roleForm.setValue({
          id: data["data"].id,
          name: data["data"].name,
          display_name: data["data"].display_name,
          description: data["data"].description
        });
      });
  }

  submit() {
    if (this.roleForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.roleService
        .updateRole(
          this.activatedRoute.snapshot.params["id"],
          this.roleForm.value
        )
        .subscribe((res: any) => {
          setTimeout(() => {
            this.loading = false;
            if (res["status"] === "200") {
              this.toastr.success(res["message"], "Success!", {
                progressBar: true
              });
              this.router.navigateByUrl("master/role");
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

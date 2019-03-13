import { Component, OnInit } from "@angular/core";
import { CustomValidators } from "ng2-validation";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { RoleService } from "src/app/shared/services/role.service";

@Component({
  selector: "app-basic-form",
  templateUrl: "./role-create.component.html",
  styleUrls: ["./role-create.component.scss"]
})
export class RoleCreateComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  roles;
  name;
  display_name;
  description;
  roleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private roleService: RoleService
  ) {}

  ngOnInit() {
    this.roleForm = this.fb.group({
      name: ["", Validators.required],
      display_name: ["", Validators.required],
      description: []
    });
  }

  submit() {
    if (this.roleForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.roleService.createRole(this.roleForm.value).subscribe((res: any) => {
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

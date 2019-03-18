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
import { PermissionService } from "src/app/shared/services/permission.service";

@Component({
  selector: "app-basic-form",
  templateUrl: "./permission-create.component.html",
  styleUrls: ["./permission-create.component.scss"]
})
export class PermissionCreateComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  roles;
  name;
  display_name;
  description;
  permissionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private permissionService: PermissionService
  ) {}

  ngOnInit() {
    this.permissionForm = this.fb.group({
      name: ["", Validators.required],
      display_name: ["", Validators.required],
      description: []
    });
  }

  submit() {
    if (this.permissionForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.permissionService
        .createPermission(this.permissionForm.value)
        .subscribe((res: any) => {
          setTimeout(() => {
            this.loading = false;
            if (res["status"] === "200") {
              this.toastr.success(res["message"], "Success!", {
                progressBar: true
              });
              this.router.navigateByUrl("master/permission");
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

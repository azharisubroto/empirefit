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
import { PermissionService } from "src/app/shared/services/permission.service";

@Component({
  selector: "app-basic-form",
  templateUrl: "./permission-form.component.html",
  styleUrls: ["./permission-form.component.scss"]
})
export class PermissionFormComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  name;
  display_name;
  description;
  permissionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private permissionService: PermissionService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.permissionForm = this.fb.group({
      id: [""],
      name: ["", Validators.required],
      display_name: ["", Validators.required],
      description: []
    });

    this.permissionService
      .showPermission(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.permissionForm.setValue({
          id: data["data"].id,
          name: data["data"].name,
          display_name: data["data"].display_name,
          description: data["data"].description
        });
      });
  }

  submit() {
    if (this.permissionForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.permissionService
        .updatePermission(
          this.activatedRoute.snapshot.params["id"],
          this.permissionForm.value
        )
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

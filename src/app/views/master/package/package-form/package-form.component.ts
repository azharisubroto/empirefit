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
import { PackageService } from "src/app/shared/services/package.service";

@Component({
  selector: "app-basic-form",
  templateUrl: "./package-form.component.html",
  styleUrls: ["./package-form.component.scss"]
})
export class PackageFormComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  data;
  day;
  package_name;
  session;
  packageForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private packageService: PackageService
  ) {}

  ngOnInit() {
    this.packageForm = this.fb.group({
      package_name: ["", Validators.required],
      day: ["", Validators.required],
      session: ["", Validators.required]
    });

    this.packageService
      .showPackage(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.packageForm.setValue({
          package_name: data["data"].package_name,
          day: data["data"].day,
          session: data["data"].session
        });
      });
  }

  submit() {
    if (this.packageForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.packageService
        .updatePackage(
          this.activatedRoute.snapshot.params["id"],
          this.packageForm.value
        )
        .subscribe((res: any) => {
          setTimeout(() => {
            this.loading = false;
            if (res["status"] === "200") {
              this.toastr.success(res["message"], "Success!", {
                progressBar: true
              });
              this.router.navigateByUrl("master/package");
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

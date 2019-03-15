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
  templateUrl: "./package-create.component.html",
  styleUrls: ["./package-create.component.scss"]
})
export class PackageCreateComponent implements OnInit {
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
  }

  submit() {
    if (this.packageForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.packageService
        .createPackage(this.packageForm.value)
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

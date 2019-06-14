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
import { DropinCompanyService } from "src/app/shared/services/dropin-company.service";

@Component({
  selector: "app-basic-form",
  templateUrl: "./dropin-company-form.component.html",
  styleUrls: ["./dropin-company-form.component.scss"]
})
export class DropinCompanyFormComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  partner_name;
  dropinCompanyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private dropinCompanyService: DropinCompanyService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.dropinCompanyForm = this.fb.group({
      partner_name: ["", Validators.required]
    });

    this.dropinCompanyService
      .showDropinCompany(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.dropinCompanyForm.setValue({
          partner_name: data["data"].partner_name
        });
      });
  }

  submit() {
    if (this.dropinCompanyForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.dropinCompanyService
        .updateDropinCompany(
          this.activatedRoute.snapshot.params["id"],
          this.dropinCompanyForm.value
        )
        .subscribe((res: any) => {
          setTimeout(() => {
            this.loading = false;
            if (res["status"] === "200") {
              this.toastr.success(res["message"], "Success!", {
                progressBar: true
              });
              this.router.navigateByUrl("master/dropin-company");
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

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
import { BenefitService } from "src/app/shared/services/benefit.service";

@Component({
  selector: "app-basic-form",
  templateUrl: "./benefit-form.component.html",
  styleUrls: ["./benefit-form.component.scss"]
})
export class BenefitFormComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  benefit_name;
  benefitForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private benefitService: BenefitService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.benefitForm = this.fb.group({
      benefit_name: ["", Validators.required]
    });

    this.benefitService
      .showBenefit(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.benefitForm.setValue({
          benefit_name: data["data"].benefit_name
        });
      });
  }

  submit() {
    if (this.benefitForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.benefitService
        .updateBenefit(
          this.activatedRoute.snapshot.params["id"],
          this.benefitForm.value
        )
        .subscribe((res: any) => {
          setTimeout(() => {
            this.loading = false;
            if (res["status"] === "200") {
              this.toastr.success(res["message"], "Success!", {
                progressBar: true
              });
              this.router.navigateByUrl("master/benefit");
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

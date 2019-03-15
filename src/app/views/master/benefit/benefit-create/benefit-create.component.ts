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
  templateUrl: "./benefit-create.component.html",
  styleUrls: ["./benefit-create.component.scss"]
})
export class BenefitCreateComponent implements OnInit {
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
  }

  submit() {
    if (this.benefitForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.benefitService
        .createBenefit(this.benefitForm.value)
        .subscribe((res: any) => {
          setTimeout(() => {
            this.loading = false;
            if (res["status"] === "200") {
              this.toastr.success(res["message"], "Success!", {
                progressBar: true
              });
              this.router.navigateByUrl("master/benefit-type");
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

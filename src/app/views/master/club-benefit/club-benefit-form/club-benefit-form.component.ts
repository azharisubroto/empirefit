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
import { ClubBenefitService } from "src/app/shared/services/club-benefit.service";
import { MemberTypeService } from "src/app/shared/services/member-type.service";
import { BenefitService } from "src/app/shared/services/benefit.service";

@Component({
  selector: "app-basic-form",
  templateUrl: "./club-benefit-form.component.html",
  styleUrls: ["./club-benefit-form.component.scss"]
})
export class ClubBenefitFormComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  data;
  clubbenefits;
  benefits;
  membertypes;
  clubBenefitForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private clubBenefitService: ClubBenefitService,
    private memberTypeService: MemberTypeService,
    private benefitService: BenefitService
  ) {}

  ngOnInit() {
    this.clubBenefitForm = this.fb.group({
      member_type_id: [""],
      benefit_id: ["", Validators.required]
    });

    this.benefitService.getBenefits().subscribe((data: any) => {
      this.benefits = data["data"];
    });

    this.memberTypeService.getMemberTypes().subscribe((data: any) => {
      this.membertypes = data["data"];
    });

    this.clubBenefitService
      .showClubBenefit(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.clubBenefitForm.setValue({
          member_type_id: data["data"].member_type_id,
          benefit_id: data["data"].benefit_id
        });
      });
  }

  submit() {
    if (this.clubBenefitForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.clubBenefitService
        .updateClubBenefit(
          this.activatedRoute.snapshot.params["id"],
          this.clubBenefitForm.value
        )
        .subscribe((res: any) => {
          setTimeout(() => {
            this.loading = false;
            if (res["status"] === "200") {
              this.toastr.success(res["message"], "Success!", {
                progressBar: true
              });
              this.router.navigateByUrl("master/club-benefit");
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

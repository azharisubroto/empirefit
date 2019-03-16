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
  templateUrl: "./club-benefit-create.component.html",
  styleUrls: ["./club-benefit-create.component.scss"]
})
export class ClubBenefitCreateComponent implements OnInit {
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
      member_type_id: [1],
      benefit_id: [1, Validators.required]
    });

    this.benefitService.getBenefits().subscribe((data: any) => {
      this.benefits = data["data"];
    });

    this.memberTypeService.getMemberTypes().subscribe((data: any) => {
      this.membertypes = data["data"];
    });
  }

  submit() {
    if (this.clubBenefitForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.clubBenefitService
        .createClubBenefit(this.clubBenefitForm.value)
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

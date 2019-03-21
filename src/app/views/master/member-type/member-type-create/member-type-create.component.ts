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
import { MemberTypeService } from "src/app/shared/services/member-type.service";
import { BenefitService } from "src/app/shared/services/benefit.service";
import * as $ from "jquery";

@Component({
  selector: "app-basic-form",
  templateUrl: "./member-type-create.component.html",
  styleUrls: ["./member-type-create.component.scss"]
})
export class MemberTypeCreateComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  member_type_name;
  memberTypeForm: FormGroup;
  benefits;
  getbenefits;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private memberTypeService: MemberTypeService,
    private benefitService: BenefitService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.memberTypeForm = this.fb.group({
      member_type_name: ["", Validators.required],
      duration: ["1", Validators.required],
      period: ["Month", Validators.required],
      session: ["10", Validators.required]
    });

    this.benefitService.getBenefits().subscribe((data: any) => {
      this.benefits = data["data"];
    });

    //Checbox
    $(".selectall").click(function() {
      if ($(this).is(":checked")) {
        $('input[name="benefit"]').prop("checked", true);
      } else {
        $('input[name="benefit"]').prop("checked", false);
      }
    });
  }

  submit() {
    if (this.memberTypeForm.invalid) {
      this.loading = false;
      return;
    } else {
      let dataBenefits = [];
      let benefit;
      $.each($("input[name='benefit']:checked"), function() {
        dataBenefits.push($(this).val());
      });
      $(".benefit-final").val(dataBenefits);

      benefit = dataBenefits;
      this.benefitService
        .createBenefitMember(benefit)
        .subscribe((data: any) => {
          if (data["status"] == "200") {
            this.loading = true;
            this.memberTypeService
              .createMemberType(this.memberTypeForm.value)
              .subscribe((res: any) => {
                setTimeout(() => {
                  this.loading = false;
                  if (res["status"] === "200") {
                    this.toastr.success(res["message"], "Success!", {
                      progressBar: true
                    });
                    this.router.navigateByUrl("master/member-type");
                  } else {
                    this.toastr.error(res["message"], "Error!", {
                      progressBar: true
                    });
                  }
                }, 3000);
              });
          } else {
            this.loading = false;
            this.toastr.success(data["message"], "Error!", {
              progressBar: true
            });
          }
        });
    }
  }
}

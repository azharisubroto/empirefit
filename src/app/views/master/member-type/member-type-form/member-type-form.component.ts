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
  templateUrl: "./member-type-form.component.html",
  styleUrls: ["./member-type-form.component.scss"]
})
export class MemberTypeFormComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  member_type_name;
  benefits;
  memberTypeForm: FormGroup;
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
      duration: ["", Validators.required],
      period: ["Month", Validators.required],
      session: ["", Validators.required]
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

    this.memberTypeService
      .showMemberType(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.memberTypeForm.setValue({
          member_type_name: data["data"].member_type_name,
          duration: data["data"].duration,
          period: data["data"].period,
          session: data["data"].session
        });

        this.getbenefits = data["data"].club_benefits;

        $.each(this.getbenefits, function(i, item) {
          $("input[name='benefit'][value=" + item.benefit_id + "]").prop(
            "checked",
            true
          );
        });
      });
  }

  submit() {
    let dataBenefits = [];
    let benefit;
    $.each($("input[name='benefit']:checked"), function() {
      dataBenefits.push($(this).val());
    });
    $(".benefit-final").val(dataBenefits);

    benefit = dataBenefits;
    this.benefitService
      .updateBenefitMember(this.activatedRoute.snapshot.params["id"], benefit)
      .subscribe((data: any) => {
        if (data["status"] == "200") {
          this.loading = true;
          this.memberTypeService
            .updateMemberType(
              this.activatedRoute.snapshot.params["id"],
              this.memberTypeForm.value
            )
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

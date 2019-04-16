import { Component, ViewChild, OnInit } from "@angular/core";
import { SignaturePad } from "angular2-signaturepad/signature-pad";
import { CustomValidators } from "ng2-validation";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { MemberService } from "src/app/shared/services/member.service";
import { HealthQuestionsService } from "src/app/shared/services/health-questions.service";
import { MemberTypeService } from "src/app/shared/services/member-type.service";
import { PaymentTypeService } from "src/app/shared/services/payment-type.service";
import { Router, ActivatedRoute } from "@angular/router";
import { BankService } from "src/app/shared/services/bank.service";
import { FingerService } from "src/app/shared/services/finger.service";
import { PersonaltrainerService } from "src/app/shared/services/personaltrainer.service";
import { PriceService } from "src/app/shared/services/price.service";
import { EdcService } from "src/app/shared/services/edc.service";
import { AuthService } from "src/app/shared/services/auth.service";
import { DomSanitizer } from "@angular/platform-browser";
import { Observable, Subject } from "rxjs";
import { interval } from "rxjs/observable/interval";
import { WebcamImage, WebcamInitError, WebcamUtil } from "ngx-webcam";
import * as $ from "jquery";
import { timeout } from "rxjs/operators";

@Component({
  selector: 'app-member-package',
  templateUrl: './member-package.component.html',
  styleUrls: ['./member-package.component.scss']
})
export class MemberPackageComponent implements OnInit {
  isCompleted: boolean;
  data: any = {
    email: ""
  };
  step2Form: FormGroup;
  loading: boolean;
  radioGroup: FormGroup;
  liabilityForm: FormGroup;
  membershipForm: FormGroup;
  public member: any;
  public type: any;
  expirydate: any;
  package: any;
  banks: any;
  trainers: any;
  finger;
  finspot;
  id_card_number;
  healthquestions;
  liabilities;
  paymenttype;
  notes;
  signature;
  price;
  user_signature;
  personal_trainer_id;
  subscription;
  photo;
  session_pt: Boolean;
  is_membersign_exists: Boolean;
  is_staffsign_exists: Boolean;
  cc_signature;
  cc_name;
  cc_card;
  cc_month;
  cc_year;
  cc_date;
  ccForm;
  credit_cards;
  autodebits;
  edcs;

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  public debitsign = {
    "minWidth": 1,
    penColor: 'rgb(0,0,0)',
    backgroundColor: '#f5f5f5',
    canvasWidth: 422,
    canvasHeight: 300
  }

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private memberService: MemberService,
    private MemberTypeService: MemberTypeService,
    private paymentTypeService: PaymentTypeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bankService: BankService,
    private authService: AuthService,
    private fingerService: FingerService,
    private PersonalTrainer: PersonaltrainerService,
    private healthQuestionService: HealthQuestionsService,
    private priceService: PriceService,
    private edcService: EdcService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    // membershipFormBuilder
    this.membershipForm = this.fb.group({
      member_type_id: ["1", Validators.required],
      payment_id: ["1", Validators.required],
      bank_id: [],
      card_number: [null],
      card_name: [null],
      exp_month: [null],
      exp_year: [null],
      auto_debet: ["1"],
      session_remains: [],
      edc_id: [1],
      traceNumber: [],
    });

    this.memberService.getSingleMember(this.activatedRoute.snapshot.params['id']).subscribe((data: any) => {
      this.member = data["data"];

      // autodebits
      this.autodebits = data["data"].auto_debits;
      this.cc_signature = this.autodebits ? this.autodebits.signature : null;

      // Credit card
      this.credit_cards = data["data"].credit_cards;

      console.log(data["data"]);

      this.membershipForm.setValue({
        member_type_id: data["data"].member_type_id,
        payment_id: data["data"].payment_id,
        bank_id: this.credit_cards ? this.credit_cards.bank_id : null,
        card_number: this.credit_cards ? this.credit_cards.card_number : null,
        auto_debet: data["data"].auto_debet,
        exp_month: this.credit_cards ? this.credit_cards.exp_month : null,
        exp_year: this.credit_cards ? this.credit_cards.exp_year : null,
        session_remains: data["data"].session_remains,
        card_name: this.credit_cards ? this.credit_cards.card_name : null,
        traceNumber: data["data"].traceNumber ? data["data"].traceNumber : null,
        edc_id: data["data"].edc_id ? data["data"].edc_id.edc_id : null,
      });
    })

    this.personal_trainer_id = null;

    // get member type
    this.MemberTypeService.getMemberTypes().subscribe((data: any) => {
      this.type = data["data"];
    });

    // get paymenet type
    this.paymentTypeService.getPaymentTypes().subscribe((data: any) => {
      this.paymenttype = data["data"];
    });

    this.bankService.getBanks().subscribe((data: any) => {
      this.banks = data["data"];
    });

    this.PersonalTrainer.getPersonalTrainers().subscribe((data: any) => {
      this.trainers = data["data"];
    });

    this.edcService.getEdcs().subscribe((data: any) => {
      this.edcs = data["data"];
    });
  }

  // Price Non PT
  getPriceNonPt() {
    $("#price").val(0);
    let data = this.membershipForm.value;
    data["member_type_id"] = this.membershipForm.controls[
      "member_type_id"
    ].value;
    data["payment_id"] = this.membershipForm.controls["payment_id"].value;

    if (data["member_type_id"] === 3) {
      $("#price").val(0);
    } else {
      this.priceService.getPriceNonPt(data).subscribe((data: any) => {
        $("#price").val(data["data"] ? data["data"].price : 0);
      });
    }
  }

  // price pt
  getPricePt(price) {
    $("#price").val(0);
    $("#price").val(price);
  }

  getSession(sesi) {
    this.session_pt = true;
    $("#session").val(0);
    $("#session").val(sesi);
  }

  getPtId(id) {
    this.personal_trainer_id = null;
    this.personal_trainer_id = id;
  }

  onStep1Next() {
    let formValue = this.membershipForm.value;
    let exp_month = this.membershipForm.controls["exp_month"].value;
    let exp_year = this.membershipForm.controls["exp_year"].value;
    formValue["payment_id"] = this.membershipForm.controls["payment_id"].value;
    formValue["member_type_id"] = this.membershipForm.controls[
      "member_type_id"
    ].value;
    formValue["personal_trainer_id"] = this.personal_trainer_id;
    formValue["bank_id"] = this.membershipForm.controls["bank_id"].value;
    formValue["card_number"] = this.membershipForm.controls[
      "card_number"
    ].value;
    formValue["exp_month"] = exp_month;
    formValue["exp_year"] = exp_year;
    formValue["trace_number"] = this.membershipForm.controls["traceNumber"].value;
    if (this.session_pt == true) {
      formValue["session_remains"] = $("#session").val();
    } else {
      formValue["session_remains"] = "0"
    }

    formValue["price"] = $("#price").val();
    formValue["card_name"] = this.membershipForm.controls["card_name"].value;

    console.log(formValue);

    if (this.membershipForm.invalid) {
      return this.toastr.error("Please complete the data", "Not Saved!", {
        progressBar: true
      });
    } else {
      this.memberService
        .updateMembership(this.activatedRoute.snapshot.params["id"], formValue)
        .subscribe((data: any) => {
          console.log(data);
          if (data["status"] == "200") {
            this.toastr.success(data["message"], "Saved", {
              progressBar: true
            });

            if (data["auto_debet"] == "1") {
              setTimeout(() => {
                $("#card_name_text").text(data["data"][0].card_name ? data["data"][0].card_name : null);
                $("#card_number_text").text(data["data"][0].card_number ? data["data"][0].card_number : null);
                $("#card_month_text").text(data["data"][0].exp_month ? data["data"][0].exp_month : null);
                $("#card_year_text").text(data["data"][0].exp_year ? data["data"][0].exp_year : null);
                $("#card_date_text").text(data["data"][0].created_at ? data["data"][0].created_at : null);
                $("#card_id_text").val(data["data"][0].id ? data["data"][0].id : null);
              }, 500)
            }
          } else {
            this.toastr.error(data["message"], "Not Saved!", {
              progressBar: true
            });
          }
        });
    }
  }

  onStep2Next(debit_sign) {
    let field_autodebits = this.membershipForm.controls["auto_debet"].value;
    let edc_id = this.membershipForm.controls["edc_id"].value;
    let _price = $("#price").val();
    let formValue = this.membershipForm.value;
    let _debit_sign = debit_sign.toDataURL();
    formValue["signature"] = _debit_sign;
    formValue["edc_id"] = edc_id;
    formValue["price"] = _price;
    formValue["credit_card_id"] = $("#card_id_text").val();
    if (field_autodebits == "1") {
      this.memberService.createAutoDebet(this.activatedRoute.snapshot.params["id"], formValue).subscribe((data: any) => {
        if (data["status"] == "200") {
          this.toastr.success(data["message"], "Saved", {
            progressBar: true
          });
          setTimeout(() => {
            this.router.navigateByUrl(
              "dashboard/member/detail/" + this.activatedRoute.snapshot.params["id"]
            );
          }, 1200);
        } else {
          this.toastr.error(data["message"], "Not Saved", {
            progressBar: true
          });
        }
      });
    } else {
      this.router.navigateByUrl(
        "dashboard/member/detail/" + this.activatedRoute.snapshot.params["id"]
      );
    }
  }

  onComplete(e) {
    this.router.navigateByUrl(
      "dashboard/member/detail/" + this.activatedRoute.snapshot.params["id"]
    );
  }

}
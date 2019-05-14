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
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BranchService } from "src/app/shared/services/branch.service";

@Component({
  selector: 'app-member-upgrade-payment',
  templateUrl: './member-upgrade-payment.component.html',
  styleUrls: ['./member-upgrade-payment.component.scss']
})
export class MemberUpgradePaymentComponent implements OnInit {

  isCompleted: boolean;
  data: any = {
    email: ""
  };
  step2Form: FormGroup;
  loading: boolean;
  radioGroup: FormGroup;
  debitGroup: FormGroup;
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
  membername;
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
  personaltrainername;
  membertype;
  session;
  join_date;
  payment_type;
  current_payment;
  autodebit;
  branch;
  isautodebit: boolean;

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  public debitsign = {
    "minWidth": 1,
    penColor: 'rgb(0,0,0)',
    backgroundColor: '#f5f5f5',
    canvasWidth: 1250,
    canvasHeight: 650
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
    private BranchService: BranchService,
    private edcService: EdcService,
    private sanitizer: DomSanitizer,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    // membershipFormBuilder
    this.membershipForm = this.fb.group({
      member_type_id: [Validators.required],
      payment_id: ["1", Validators.required],
      bank_id: [],
      card_number: [null],
      card_name: [null],
      exp_month: [null],
      exp_year: [null],
      auto_debet: ["0"],
      session_remains: [],
      edc_id: [],
      // branch_id: [],
      traceNumber: [],
      debit_sign: [""],
    });

    this.debitGroup = this.fb.group({
      debit_sign: [""],
    });

    this.memberService.getSingleMember(this.activatedRoute.snapshot.params['id']).subscribe((data: any) => {
      this.member = data["data"];

      this.PersonalTrainer.personalTrainerMember(this.activatedRoute.snapshot.params["id"]).subscribe((data: any) => {
        this.personaltrainername = data["data"].personal_trainer_name ? data["data"].personal_trainer_name : "n/a";
      });

      console.log(this.member);

      this.membername = this.member.name;
      this.membertype = this.member.member_type_name;
      this.session = this.member.session_remains;
      this.join_date = this.member.join_date;
      this.payment_type = this.member.payment_type_name;
      this.autodebit = this.member.auto_debet;
      this.current_payment = this.member.last_transaction ? this.member.last_transaction.idr : "0";

      // autodebits
      this.autodebits = data["data"].auto_debits;
      this.cc_signature = this.autodebits ? this.autodebits.signature : null;

      // Credit card
      this.credit_cards = data["data"].credit_cards;

      console.log(data["data"]);

      // this.membershipForm.setValue({
      //   member_type_id: data["data"].member_type_id,
      //   payment_id: data["data"].payment_id,
      //   bank_id: this.credit_cards ? this.credit_cards.bank_id : null,
      //   card_number: this.credit_cards ? this.credit_cards.card_number : null,
      //   auto_debet: data["data"].auto_debet,
      //   exp_month: this.credit_cards ? this.credit_cards.exp_month : null,
      //   exp_year: this.credit_cards ? this.credit_cards.exp_year : null,
      //   session_remains: data["data"].session_remains,
      //   card_name: this.credit_cards ? this.credit_cards.card_name : null,
      //   traceNumber: data["data"].traceNumber ? data["data"].traceNumber : null,
      //   edc_id: data["data"].edc_id ? data["data"].edc_id.edc_id : null,
      // });
    });

    this.BranchService.getBranches().subscribe((data: any) => {
      this.branch = data["data"];
    });

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

    var mod = this;

    $('select[name="auto_debit"]').on('change', function () {
      var _ini = $(this);
      console.log(_ini.val());

      if (_ini.val() == 0) {
        //$('.nav .nav-item:nth-child(4)').hide();
        //$('#Autodebet').hide();
        mod.isautodebit = false;
      } else {
        //$('.nav .nav-item:nth-child(4)').show();
        //$('#Autodebet').show();
        mod.isautodebit = true;
      }
    });
  }

  // Price Non PT
  getPriceNonPt() {
    let data = this.membershipForm.value;
    data["member_type_id"] = this.membershipForm.controls[
      "member_type_id"
    ].value;
    data["payment_id"] = this.membershipForm.controls["payment_id"].value;

    if (data["member_type_id"] == 3) {
      this.priceService.getPriceNonPt(data).subscribe((data: any) => {
        setTimeout(() => {
          $("#isptselect").removeClass('d-none');
          $("#expiry_in").val(data["member_type"].duration + " " + data["member_type"].period);
        }, 500);
      });
    } else {
      this.priceService.getPriceNonPt(data).subscribe((data: any) => {
        setTimeout(() => {
          $("#isptselect").addClass('d-none');
          $("#price").val(0);
          $("#price").val(data["data"] ? data["data"].price : 0);
          var price = $("#price").val().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
          $('.show-price').text(price);
          $("#session").val(data["member_type"].session);
          $("#expiry_in").val(data["member_type"].duration + " " + data["member_type"].period);
        }, 500);
      });
    }
  }

  // Autodebit price
  getAutodebitPrice() {
    let data = this.membershipForm.value;
    data["member_type_id"] = this.membershipForm.controls[
      "member_type_id"
    ].value;
    data["payment_id"] = this.membershipForm.controls["payment_id"].value;
    data["auto_debet"] = this.membershipForm.controls["auto_debet"].value;
    if (data["member_type_id"] != 3) {
      if (data["payment_id"] == 1) {
        this.priceService.getPriceNonPt(data).subscribe((data: any) => {
          console.log(data);
          setTimeout(() => {
            $("#price").val(0);
            $("#price").val(data["data"] ? data["data"].price : 0);
            var price = $("#price").val().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            $('.show-price').text(price);
          }, 500);
        });
      }
    }
  }

  // price pt
  getPricePt(isprice) {
    setTimeout(() => {
      $("#price").val(0);
      $("#price").val(isprice);
      var price = isprice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      $('.show-price').text(price);
    }, 500);
  }

  getSession(sesi) {
    $("#session").val(0);
    $("#session").val(sesi);
  }

  getPtId(id) {
    this.personal_trainer_id = null;
    this.personal_trainer_id = id;
  }

  openLg(content) {
    this.modalService.open(content, { windowClass: "big-modal" });
  }

  memberautodebitsign(debit_sign) {
    if (debit_sign.isEmpty()) {
      alert("Please Draw Signature");
    } else {
      this.debitGroup.patchValue({
        debit_sign: debit_sign.toDataURL()
      });
      setTimeout(() => {
        $("#debit-sign").val(debit_sign.toDataURL());
        $(".isSuccessAutodebitSign").removeClass("d-none");
      }, 200);
      $(".modal-header .close").trigger("click");
    }
  }

  onStep1Next() {
    if (this.membershipForm.controls["auto_debet"].value == "0") {
      setTimeout(() => {
        $('.nextaja').trigger('click');
      }, 50);
    }
    let formValue = this.membershipForm.value;
    let exp_month = this.membershipForm.controls["exp_month"].value;
    let exp_year = this.membershipForm.controls["exp_year"].value;
    formValue["payment_id"] = this.membershipForm.controls["payment_id"].value;
    formValue["member_type_id"] = this.membershipForm.controls[
      "member_type_id"
    ].value;
    formValue["personal_trainer_id"] = this.personal_trainer_id;
    formValue["bank_id"] = this.membershipForm.controls["bank_id"].value;
    // formValue["branch_id"] = this.membershipForm.controls["branch_id"].value;
    formValue["card_number"] = this.membershipForm.controls[
      "card_number"
    ].value;
    formValue["exp_month"] = exp_month;
    formValue["exp_year"] = exp_year;
    formValue["trace_number"] = this.membershipForm.controls["traceNumber"].value;
    formValue["session_remains"] = $("#session").val();

    formValue["price"] = $("#price").val();
    formValue["final_price"] = $("#final_price").val();
    formValue["card_name"] = this.membershipForm.controls["card_name"].value;
    formValue["auto_debet"] = this.membershipForm.controls["auto_debet"].value;
    formValue["edc_id"] = this.membershipForm.controls["edc_id"].value;

    // console.log(formValue);

    if (this.membershipForm.invalid || $("#price").val() == "" || $("#price").val() == "0" || $("#final_price").val() == "" || $("#final_price").val() == "0") {
      setTimeout(() => {
        $('.prevaja').trigger('click');
      }, 50);
      this.toastr.error("Please complete the data", "Not Saved!", {
        progressBar: true
      });
    } else {
      if (this.isautodebit == false) {
        setTimeout(() => {
          $('.nextaja').trigger('click');
        }, 50);
      }
      this.memberService
        .upgradeMembership(this.activatedRoute.snapshot.params["id"], formValue)
        .subscribe((data: any) => {
          console.log(data);
          if (data["status"] === "200") {
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
            setTimeout(() => {
              $('.prevaja').trigger('click');
            }, 50);
            this.toastr.error(data["message"], "Not Saved!", {
              progressBar: true
            });
          }
        });
    }
  }

  onStep2Next() {
    if (this.membershipForm.controls["auto_debet"].value == "1") {
      let edc_id = this.membershipForm.controls["edc_id"].value;
      let _price = $("#price").val();
      let formValue = this.membershipForm.value;
      let _debit_sign = this.debitGroup.controls["debit_sign"].value;
      formValue["signature"] = _debit_sign;
      formValue["edc_id"] = edc_id;
      formValue["price"] = _price;
      formValue["credit_card_id"] = $("#card_id_text").val();

      if (_debit_sign == '') {
        alert("Please Draw Signature");
        setTimeout(() => {
          $('.prevaja').trigger('click');
        }, 50);
      } else {
        this.memberService.createAutoDebet(this.activatedRoute.snapshot.params["id"], formValue).subscribe((data: any) => {
          if (data["status"] == "200") {
            this.toastr.success(data["message"], "Saved", {
              progressBar: true
            });
          } else {
            setTimeout(() => {
              $('.prevaja').trigger('click');
            }, 30);
            this.toastr.error(data["message"], "Not Saved", {
              progressBar: true
            });
          }
        });
      }
    }
  }

  onComplete(e) {
    this.router.navigateByUrl(
      "dashboard/member/detail/" + this.activatedRoute.snapshot.params["id"]
    );
  }

}

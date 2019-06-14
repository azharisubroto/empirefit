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

@Component({
  selector: 'app-member-change-cc',
  templateUrl: './member-change-cc.component.html',
  styleUrls: ['./member-change-cc.component.scss']
})
export class MemberChangeCcComponent implements OnInit {

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  public debitsign = {
    "minWidth": 1,
    penColor: 'rgb(0,0,0)',
    backgroundColor: '#f5f5f5',
    canvasWidth: 1250,
    canvasHeight: 650
  }

  member;
  membername;
  recuring_payment;
  banks;
  autodebitForm: FormGroup;
  autodebits;
  creditcards;
  loading: boolean;

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
    private sanitizer: DomSanitizer,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.autodebitForm = this.fb.group({
      cc_name: ["", Validators.required],
      cc_card: ["", Validators.required],
      cc_month: ["", Validators.required],
      cc_year: ["", Validators.required],
      bank_id: ["1", Validators.required],
      debit_sign: ["", Validators.required],
    });

    this.memberService.getSingleMember(this.activatedRoute.snapshot.params["id"]).subscribe((data: any) => {
      this.member = data["data"];
      this.membername = this.member.name;
      this.autodebits = this.member.auto_debits;
      this.creditcards = this.member.credit_cards;
      this.recuring_payment = this.autodebits ? this.autodebits.recuring_payment : "-";

      this.autodebitForm.setValue({
        cc_name: this.autodebits.credit_card_name,
        cc_card: this.autodebits.credit_card_number,
        cc_month: this.autodebits.credit_card_exp_month,
        cc_year: this.autodebits.credit_card_exp_year,
        bank_id: this.creditcards.bank_id,
        debit_sign: "",
      });
    });

    this.bankService.getBanks().subscribe((data: any) => {
      this.banks = data["data"];
    })
  }

  openLg(content) {
    this.modalService.open(content, { windowClass: "big-modal" });
  }

  memberautodebitsign(debit_sign) {
    if (debit_sign.isEmpty()) {
      alert("Please Draw Signature");
    } else {
      $("#debit-sign").val(debit_sign.toDataURL());
      this.autodebitForm.patchValue({
        debit_sign: debit_sign.toDataURL()
      });
      setTimeout(() => {
        $(".isSuccessAutodebitSign").removeClass("d-none");
      }, 200);
      $(".modal-header .close").trigger("click");
    }
  }

  submit() {
    this.loading = true;
    let formValue = this.autodebitForm.value;

    this.memberService.updateCC(this.activatedRoute.snapshot.params["id"], formValue).subscribe((data: any) => {
      if (data["status"] == "200") {
        this.toastr.success(data["message"], "Saved", {
          progressBar: true
        });
        this.loading = false;
        this.router.navigateByUrl(
          "dashboard/member/cc-autodebit/" + this.activatedRoute.snapshot.params["id"]
        );
      } else {
        this.toastr.error(data["message"], "Not Saved", {
          progressBar: true
        });
        this.loading = false;
      }
    });
  }

}

import { Component, ViewChild, OnInit } from "@angular/core";
import { Location } from '@angular/common';
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
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import * as $ from "jquery";
import { timeout } from "rxjs/operators";
import { BranchService } from "src/app/shared/services/branch.service";
import { MemberPartnerService } from "src/app/shared/services/memberpartner.service";

@Component({
  selector: 'app-member-partner-sign',
  templateUrl: './member-partner-sign.component.html',
  styleUrls: ['./member-partner-sign.component.scss']
})

export class MemberPartnerSignComponent implements OnInit {
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
  isautodebit: boolean;
  isptselect: boolean;
  branch;

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  public signaturePadMember = {
    "minWidth": 1,
    penColor: 'rgb(0,0,0)',
    backgroundColor: '#f5f5f5',
    canvasWidth: 1250,
    canvasHeight: 650
    //onEnd: this.saveimg(),
    // canvasWeight: 250,
    // canvasHeight: 150
  }

  public signaturePadStaff = {
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
    private branchService: BranchService,
    private MemberPartnerService: MemberPartnerService,
    private edcService: EdcService,
    private sanitizer: DomSanitizer,
    private modalService: NgbModal,
    private location: Location
  ) { }

  ngOnInit() {
    var mod = this;
    this.member = { make: "" };
    // liabilityFormBuilder
    this.liabilityForm = this.fb.group({
      user_id: ["", Validators.required],
      member_sign: ["", Validators.required],
      staff_sign: ["", Validators.required],
      debit_sign: ["", Validators.required],
    });

    // get user data
    this.memberService
      .getSingleMember(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.member = data["data"];
      });

    // health questions
    this.healthQuestionService
      .getByMember(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.healthquestions = data["data"];
        console.log(data);
      });

  }

  memberliabilitysign(member_sign) {
    if (member_sign.isEmpty()) {
      alert("Please Draw Signature");
    } else {
      $("#member-sign").val(member_sign.toDataURL());
      this.liabilityForm.patchValue({
        member_sign: member_sign.toDataURL()
      });
      setTimeout(() => {
        $(".isSuccessLiabilityMemberSign").removeClass("d-none");
      }, 200);
      $(".modal-header .close").trigger("click");
    }
  }

  staffliabilitysign(staff_sign) {
    if (staff_sign.isEmpty()) {
      alert("Please Draw Signature");
    } else {
      $("#staff-sign").val(staff_sign.toDataURL());
      this.liabilityForm.patchValue({
        staff_sign: staff_sign.toDataURL()
      });
      setTimeout(() => {
        $(".isSuccessLiabilityStaffSign").removeClass("d-none");
      }, 200);
      $(".modal-header .close").trigger("click");
      console.log(this.liabilityForm.value);
    }
  }

  openLg(content) {
    this.modalService.open(content, { windowClass: "big-modal" });
  }

  back() {
    this.location.back();
  }

  done() {
    let formValue = this.liabilityForm.value;

    formValue["member_id"] = this.activatedRoute.snapshot.params["id"];
    formValue["email"] = this.member.email;
    console.log(formValue);
    this.memberService.updateLiability(this.activatedRoute.snapshot.params["id"], formValue).subscribe((data: any) => {
      if (data["status"] == "200") {
        this.toastr.success(data["message"], "Saved", {
          progressBar: true
        });

        this.MemberPartnerService.updateLiability(this.member.phone, formValue).subscribe((data: any) => {
          this.location.back();
        });
      }
    });
  }

}

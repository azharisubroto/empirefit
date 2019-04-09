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
  selector: "app-member-activation",
  templateUrl: "./member-activation.component.html",
  styleUrls: ["./member-activation.component.scss"]
})
export class MemberActivationComponent implements OnInit {
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
  public signaturePadMember = {
    "minWidth": 1,
    penColor: 'rgb(0,0,0)',
    backgroundColor: '#f5f5f5',
    canvasWidth: 523,
    canvasHeight: 300
    //onEnd: this.saveimg(),
    // canvasWeight: 250,
    // canvasHeight: 150
  }

  public signaturePadStaff = {
    "minWidth": 1,
    penColor: 'rgb(0,0,0)',
    backgroundColor: '#f5f5f5',
    canvasWidth: 523,
    canvasHeight: 300
  }

  public debitsign = {
    "minWidth": 1,
    penColor: 'rgb(0,0,0)',
    backgroundColor: '#f5f5f5',
    canvasWidth: 422,
    canvasHeight: 300
  }

  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  public webcamImage: WebcamImage = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean | string> = new Subject<
    boolean | string
    >();

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
    this.member = { make: "" };
    this.expirydate = { make: "" };
    this.radioGroup = this.fb.group({
      radio: []
    });
    this.step2Form = this.fb.group({
      experience: [2]
    });

    // liabilityFormBuilder
    this.liabilityForm = this.fb.group({
      user_id: ["", Validators.required],
      member_sign: ["", Validators.required],
      staff_sign: ["", Validators.required]
    });

    // membershipFormBuilder
    this.membershipForm = this.fb.group({
      member_type_id: ["1", Validators.required],
      payment_id: ["1", Validators.required],
      bank_id: [null],
      card_number: [null],
      exp_month: [null],
      exp_year: [null],
      auto_debet: ["1"],
      duration: [],
      session_remains: [],
      period: [],
      edc_id: []
    });

    this.personal_trainer_id = null;

    // get user data
    this.memberService
      .getSingleMember(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.member = data["data"];

        // autodebits
        this.autodebits = data["data"].auto_debits[0];
        this.cc_signature = this.autodebits ? this.autodebits.signature : null;

        // Credit card
        this.credit_cards = data["data"].credit_cards[0];
        this.cc_name = this.credit_cards ? this.credit_cards.card_name : null;
        this.cc_card = this.credit_cards ? this.credit_cards.card_number : null;
        this.cc_month = this.credit_cards ? this.credit_cards.exp_month : null;
        this.cc_year = this.credit_cards ? this.credit_cards.exp_year : null;
        this.cc_date = this.credit_cards ? this.credit_cards.created_at : null;

        var date = new Date(data["data"]["expairy_date"]);
        var list = date.toUTCString().split(" ");
        //results.push(list[1]+" "+list[2]);
        this.expirydate = list[1] + " " + list[2] + " " + list[3];
        console.log(this.member);

        if (this.member.liability_signature) {
          this.is_membersign_exists = true;
        } else {
          this.is_membersign_exists = false;
        }

        if (this.member.liability_user_signature) {
          this.is_staffsign_exists = true;
        } else {
          this.is_staffsign_exists = false;
        }

        this.membershipForm.setValue({
          member_type_id: data["data"].member_type_id,
          payment_id: data["data"].payment_id,
          bank_id: this.credit_cards ? this.credit_cards.bank_id : null,
          card_number: this.credit_cards ? this.credit_cards.card_number : null,
          auto_debet: data["data"].auto_debet,
          exp_month: this.credit_cards ? this.credit_cards.exp_month : null,
          exp_year: this.credit_cards ? this.credit_cards.exp_year : null,
          duration: data["data"].duration,
          session_remains: data["data"].session_remains,
          period: data["data"].period,
          edc_id: data["data"].edc_id[0] ? data["data"].edc_id[0].edc_id : null,
        });

        this.authService.getuser().subscribe((data: any) => {
          this.edcService.getEdcByBranch(data["data"].branch_id).subscribe((data: any) => {
            this.edcs = data["data"];
          });
        })

        setTimeout(() => {
          if (data["data"].state == "Active") {
            $("#finger-status").text("Success");
            $("#btn-scan").addClass("disabled");
          } else {
            $("#finger-status").text("Unverified");
            $("#btn-scan").removeClass("disabled");
          }

          // if (data["data"].member_type_id != 3) {
          //   $(".personal-trainer").attr('disabled', 'disabled');
          // } else {
          //   $(".personal-trainer").removeAttr("disabled");
          // }
        }, 2000);

        this.id_card_number = data["data"].id_card_number;

        this.finspot = data["url"];

        this.finger = this.sanitizer.bypassSecurityTrustUrl(this.finspot);
      });

    // health questions

    this.healthQuestionService
      .getByMember(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.healthquestions = data["data"];
      });

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

    //  webcam
    WebcamUtil.getAvailableVideoInputs().then(
      (mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      }
    );

    setTimeout(() => {
      let data = this.membershipForm.value;
      data["member_type_id"] = this.membershipForm.controls[
        "member_type_id"
      ].value;
      data["payment_id"] = this.membershipForm.controls["payment_id"].value;
      this.priceService.getPriceNonPt(data).subscribe((data: any) => {
        $.each(data["data"], function (i, item) {
          $("#price").val(item.price);
        });
      });
    }, 2000);
  }

  // Check Reg
  checkReg() {
    const source = interval(3000),
      subscribe = source.subscribe(val => {
        this.fingerService
          .checkMemberRegistration(this.member.finger_code)
          .subscribe((data: any) => {
            console.log(this.member.finger_code);
            if (data["status"] === "200") {
              subscribe.unsubscribe();
              this.toastr.success(data["message"], "Saved", {
                progressBar: true
              });
              $("#finger-status").text("Success");
              $("#btn-scan").addClass("disabled");
            } else {
              console.log("Checking finger . . .");
            }
          });
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
        $.each(data["data"], function (i, item) {
          $("#price").val(item.price);
        });
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

  //  webcam
  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info("received webcam image", webcamImage);
    this.webcamImage = webcamImage;
    this.photo = webcamImage.imageAsDataUrl;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }

  onStep1Next(member_sign, staff_sign) {
    if (this.member.liability_signature || this.member.liability_user_signature) {
      console.log("Signature exist");
    } else {
      let _member_sign = member_sign.toDataURL(),
        _staff_sign = staff_sign.toDataURL(),
        formValue = this.liabilityForm.value;

      formValue["member_sign"] = _member_sign;
      formValue["staff_sign"] = _staff_sign;
      formValue["member_id"] = this.activatedRoute.snapshot.params["id"];
      console.log(formValue)
      this.memberService.updateLiability(this.activatedRoute.snapshot.params["id"], formValue).subscribe((data: any) => {
        if (data["status"] == "200") {
          this.toastr.success(data["message"], "Saved", {
            progressBar: true
          });
        }
      });
    }
  }
  onStep2Next(e) {
    let formValue = ({
      photo: this.photo,
    })

    if (this.photo) {
      this.memberService.updateIdentification(this.activatedRoute.snapshot.params["id"], formValue).subscribe((data: any) => {
        if (data["status"] == "200") {
          this.toastr.success(data["message"], "Saved", {
            progressBar: true
          });
        }
      })
    }
  }
  onStep3Next(e) {
    if (this.member.member_type_id) {
      console.log('next')
    } else {
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
      formValue["duration"] = this.membershipForm.controls["duration"].value;
      formValue["period"] = this.membershipForm.controls["period"].value;
      if (this.session_pt == true) {
        formValue["session_remains"] = $("#session").val();
      } else {
        formValue["session_remains"] = this.membershipForm.controls[
          "session_remains"
        ].value;
      }
      formValue["price"] = $("#price").val();

      if (this.membershipForm.controls["auto_debet"].value === "0") {
        formValue["auto_debet"] = false;
      } else {
        formValue["auto_debet"] = true;
      }
      formValue["card_name"] = this.member.name;

      if (this.membershipForm.invalid) {
        return this.toastr.error("Please complete the data", "Not Saved!", {
          progressBar: true
        });
      } else {
        this.memberService
          .updateMember(this.activatedRoute.snapshot.params["id"], formValue)
          .subscribe((data: any) => {
            console.log(data);
            if (data["status"] == "200") {
              this.toastr.success(data["message"], "Saved", {
                progressBar: true
              });

              if (data["auto_debet"] === true) {
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
  }
  onStep4Next(debit_sign) {
    if (this.cc_signature) {
      console.log("Signature exist");
    } else {
      let field_autodebits = this.membershipForm.controls["auto_debet"].value;
      let edc_id = this.membershipForm.controls["edc_id"].value;
      let _price = $("#price").val();
      let formValue = this.liabilityForm.value;
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
          } else {
            this.toastr.error(data["message"], "Not Saved", {
              progressBar: true
            });
          }
        });
      } else {
        return false;
      }
    }
  }
  onComplete(e) {
    this.router.navigateByUrl(
      "dashboard/member/detail/" + this.activatedRoute.snapshot.params["id"]
    );
  }
}

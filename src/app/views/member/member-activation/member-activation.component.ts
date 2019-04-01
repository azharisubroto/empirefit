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
import { DomSanitizer } from "@angular/platform-browser";
import { Observable, Subject, timer } from "rxjs";
import { take } from "rxjs/operators";
import { WebcamImage, WebcamInitError, WebcamUtil } from "ngx-webcam";
import * as $ from "jquery";

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
    private bank: BankService,
    private fingerService: FingerService,
    private PersonalTrainer: PersonaltrainerService,
    private healthQuestionService: HealthQuestionsService,
    private priceService: PriceService,
    private sanitizer: DomSanitizer
  ) {}

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
      signature: ["", Validators.required],
      user_signature: ["", Validators.required]
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
      period: []
    });

    this.personal_trainer_id = null;

    // get user data
    this.memberService
      .getSingleMember(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.member = data["data"];
        var date = new Date(data["data"]["expairy_date"]);
        var list = date.toUTCString().split(" ");
        //results.push(list[1]+" "+list[2]);
        this.expirydate = list[1] + " " + list[2] + " " + list[3];
        console.log(this.member);

        this.membershipForm.setValue({
          member_type_id: data["data"].member_type_id,
          payment_id: data["data"].payment_id,
          bank_id: data["data"].bank_id,
          card_number: data["data"].card_number,
          auto_debet: data["data"].auto_debet,
          exp_month: null,
          exp_year: null,
          duration: data["data"].duration,
          session_remains: data["data"].session_remains,
          period: data["data"].period
        });

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

    this.bank.getBanks().subscribe((data: any) => {
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
        $.each(data["data"], function(i, item) {
          $("#price").val(item.price);
        });
      });
    }, 2000);
  }

  // Check Reg
  checkReg() {
    let delay = 5000,
      count = 4;

    timer(delay)
      .pipe(take(count))
      .subscribe(x => {
        this.checkMemberReg();
      });
  }

  // Check Member Registration
  checkMemberReg() {
    this.fingerService
      .checkMemberRegistration(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        if (data["status"] === "200") {
          console.log("OK");
        } else {
          console.log("Something wrong");
        }
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
        $.each(data["data"], function(i, item) {
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

  onStep1Next(e) {
    // if (this.liabilityForm.invalid) {
    //   this.toastr.error("Please complete the data", "Not Saved!", {
    //     progressBar: true
    //   });
    // } else {
    //   this.memberService.updateLiability(
    //     this.activatedRoute.snapshot.params["id"],
    //     this.liabilityForm.value
    //   ).subscribe((data:any) => {
    //     if (data['status'] == "200") {
    //       this.toastr.error(data["message"], "Success", {
    //         progressBar: true
    //       });
    //     }
    //   });
    // }
  }
  onStep2Next(e) {}
  onStep3Next(e) {
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
    formValue["exp_date"] = exp_year + "-" + exp_month + "-" + "01";
    formValue["duration"] = this.membershipForm.controls["duration"].value;
    formValue["period"] = this.membershipForm.controls["period"].value;
    formValue["session_remains"] = this.membershipForm.controls[
      "session_remains"
    ].value;
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
          } else {
            this.toastr.error(data["message"], "Not Saved!", {
              progressBar: true
            });
          }
        });
    }
  }
  onStep4Next(e) {
    // let formValue = this.membershipForm.value;
    // formValue["auto_debet"] = this.membershipForm.controls["auto_debet"];
    // if (formValue["auto_debet"] === "1") {
    //   this.memberService.createAutoDebet().subscribe((data: any) => {
    //     if (data["status"] == "200") {
    //       this.toastr.success(data["message"], "Saved", {
    //         progressBar: true
    //       });
    //     } else {
    //       this.toastr.error(data["message"], "Not Saved!", {
    //         progressBar: true
    //       });
    //     }
    //   });
    // }
  }
  onComplete(e) {
    this.router.navigateByUrl(
      "dashboard/member/detail/" + this.activatedRoute.snapshot.params["id"]
    );
  }
}

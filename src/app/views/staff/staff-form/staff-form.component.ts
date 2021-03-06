import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PositionService } from "src/app/shared/services/position.service";
import { BranchService } from "src/app/shared/services/branch.service";
import { StaffService } from "src/app/shared/services/staff.service";
import { BankService } from "src/app/shared/services/bank.service";
import { FingerService } from "src/app/shared/services/finger.service";
import { UserService } from "src/app/shared/services/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import * as $ from "jquery";
import { ToastrService } from "ngx-toastr";
import { NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";
import { Observable, Subject } from "rxjs";
import { interval } from "rxjs/observable/interval";
import { WebcamImage, WebcamInitError, WebcamUtil } from "ngx-webcam";
import { DomSanitizer } from "@angular/platform-browser";
import { timer } from "rxjs/observable/timer";

@Component({
  selector: "app-wizard",
  templateUrl: "./staff-form.component.html",
  styleUrls: ["./staff-form.component.css"]
})
export class StaffFormComponent implements OnInit {
  isCompleted: boolean;
  staffForm: FormGroup;
  positions;
  staff;
  id_staff;
  branches;
  getpositions;
  banks;
  finger;
  finspot;
  id_card;
  photo;
  user;
  vc;
  device_name;
  statusfinger;

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
    private positionService: PositionService,
    private router: Router,
    private branchService: BranchService,
    private staffService: StaffService,
    private UserService: UserService,
    private bankService: BankService,
    private fingerService: FingerService,
    private toastr: ToastrService,
    private parserFormatter: NgbDateParserFormatter,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.staffForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      phone: ["", Validators.required],
      id_card: ["", Validators.required],
      date_of_birth: ["", Validators.required],
      account_number: [""],
      branch_id: ["1"],
      bank_id: [],
      address: ["", Validators.required]
    });

    this.positionService.getPositions().subscribe((data: any) => {
      this.positions = data["data"];
    });

    this.bankService.getBanks().subscribe((data: any) => {
      this.banks = data["data"];
    });

    this.staffService
      .showStaff(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.getpositions = data["data"].positions;

        this.staff = data["data"];

        setTimeout(() => {
          $.each(this.getpositions, function (i, item) {
            $("input[name='position'][value=" + item.position_id + "]").prop(
              "checked",
              true
            );
          });

          $("#photo").attr('src', data["data"].photo);
        }, 1000);

        this.staffForm.setValue({
          name: data["data"].name,
          email: data["data"].email,
          phone: data["data"].phone,
          id_card: data["data"].id_card,
          date_of_birth: data["data"].date_of_birth,
          account_number: data["data"].account_number,
          branch_id: data["data"].branch_id,
          bank_id: data["data"].bank_id,
          address: data["data"].address
        });

        setTimeout(() => {
          if (data["data"].status == "Active") {
            $("#finger-status").text("Success");
            $("#staff_name").text(data["data"].name);
          } else {
            $("#staff-name").text(data["data"].name);
            $("#finger_status").text("Unverified");
          }
        }, 2000);

        this.id_card = data["data"].id_card;
      });

    this.branchService.getBranches().subscribe((data: any) => {
      this.branches = data["data"];
    });

    WebcamUtil.getAvailableVideoInputs().then(
      (mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      }
    );

    // Get single User
    this.UserService.getSingleUser().subscribe((data: any) => {
      this.user = data["data"];
      this.vc = data["data"].vc;
      // console.log(this.user);
      this.device_name = data["data"].device_name;

      this.staffService.checkFinger(this.activatedRoute.snapshot.params['id'], data["data"].vc).subscribe((data: any) => {
        this.statusfinger = data['status_finger'];
        // console.log(this.statusfinger);
        setTimeout(() => {
          if (data['status_finger'] == '0') {
            $("#btn-fingerscan").removeClass('disabled');
            $("#btn-autoreg").addClass('disabled');
            $("#btn-manualreg").attr('disabled', 'disabled');
          } else {
            $("#btn-fingerscan").addClass('disabled');
            $("#btn-autoreg").removeClass('disabled');
            $("#btn-manualreg").removeAttr('disabled');
          }
        }, 500);
      });

      this.staffService.getUrlFingerReg(this.activatedRoute.snapshot.params['id'], data["data"].vc).subscribe((data: any) => {
        this.finspot = data["data"];
        this.finger = this.sanitizer.bypassSecurityTrustUrl(this.finspot);
      });

    });
  }

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

  // Check Reg
  checkReg() {
    const source = interval(3000),
      subscribe = source.subscribe(val => {
        this.fingerService
          .checkStaffRegistration(this.staff.finger_code, this.vc)
          .subscribe((data: any) => {
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

  onStep1Next(e) {
    if (this.staffForm.invalid) {
      this.toastr.error("Please complete the data", "Not Saved!", {
        progressBar: true
      });
    } else {
      let dataPositions = [];
      let dataPositionName = [];

      $.each($("input[name='position']:checked"), function () {
        dataPositions.push($(this).val());
        dataPositionName.push(
          $(this)
            .parent()
            .find(".position_name")
            .text()
        );
      });

      $(".position-final").val(dataPositions);
      $(".position-name-final").val(dataPositionName);

      let name = this.staffForm.controls["name"].value;
      let email = this.staffForm.controls["email"].value;
      let phone = this.staffForm.controls["phone"].value;
      let id_card = this.staffForm.controls["id_card"].value;
      let date_of_birth = this.staffForm.controls["date_of_birth"].value;
      let account_number = this.staffForm.controls["account_number"].value;
      let branch_id = this.staffForm.controls["branch_id"].value;
      let bank_id = this.staffForm.controls["bank_id"].value;
      let address = this.staffForm.controls["address"].value;
      let formValues = this.staffForm.value;

      formValues["date_of_birth"] = date_of_birth;
      formValues["name"] = name;
      formValues["email"] = email;
      formValues["phone"] = phone;
      formValues["id_card"] = id_card;
      formValues["account_number"] = account_number;
      formValues["branch_id"] = branch_id;
      formValues["bank_id"] = bank_id;
      formValues["address"] = address;
      formValues["positions"] = dataPositions;
      formValues["position_name"] = dataPositionName;

      this.staffService
        .updateStaff(this.activatedRoute.snapshot.params["id"], formValues)
        .subscribe((data: any) => {
          if (data["status"] === "200") {
            this.toastr.success(data["message"], "Success!", {
              progressBar: true
            });
          }
        });
    }
  }
  onComplete(e) {
    let formValue = ({
      photo: this.photo,
    })

    if (this.photo) {
      this.staffService.updatePhoto(this.activatedRoute.snapshot.params["id"], formValue).subscribe((data: any) => {
        if (data["status"] == "200") {
          this.toastr.success(data["message"], "Saved", {
            progressBar: true
          });
        }
      })
    } else {
      this.toastr.success("Successfully updated member", "Saved", {
        progressBar: true
      });
    }

    this.router.navigateByUrl("staff");
  }
}

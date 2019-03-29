import { Component, OnInit } from "@angular/core";
import { CustomValidators } from "ng2-validation";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { MemberService } from "src/app/shared/services/member.service";
import { UserService } from "src/app/shared/services/user.service";
import { AttendanceService } from "src/app/shared/services/attendance.service";
import { ScheduleService } from "src/app/shared/services/schedule.service";
import { ClassRegisterService } from "src/app/shared/services/classRegisterService.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-basic-form",
  templateUrl: "./member-attendance.component.html",
  styleUrls: ["./member-attendance.component.scss"]
})
export class MemberAttendanceComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  radioGroup: FormGroup;
  public member: any;
  expirydate: any;
  user: any;
  firstTime: any;
  userForm: FormGroup;
  password_att;
  password_class;
  public todayDate: any;
  finger;
  finspot;
  present;
  id_card_number;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private memberService: MemberService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private UserService: UserService,
    private attendanceService: AttendanceService,
    private scheduleService: ScheduleService,
    private classRegisterService: ClassRegisterService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.member = { make: "" };
    this.expirydate = { make: "" };
    this.user = { make: "" };
    this.firstTime = { make: "" };
    this.buildFormBasic();
    this.radioGroup = this.fb.group({
      radio: []
    });

    this.userForm = this.fb.group({
      password: ["", Validators.required],
      schedule_id: ["", Validators.required]
    });

    this.memberService
      .getSingleMember(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        if (data["data"].member_type_id == null) {
          $("#btn-manualreg").attr("disabled", "disabled");
          $("#btn-manualattendance").attr("disabled", "disabled");

          $("#btn-attendance").addClass("disabled");

          $("#btn-attendance").addClass("disabled");
          $("#btn-history").addClass("disabled");
          $("#btn-autoreg").addClass("disabled");

          $("#btn-classhis").addClass("disabled");
        }

        this.member = data["data"];
        var date = new Date(data["data"]["expairy_date"]);
        var list = date.toUTCString().split(" ");
        //results.push(list[1]+" "+list[2]);
        this.expirydate = list[1] + " " + list[2] + " " + list[3];
        //console.log( this.member );
        this.todayDate = this.getTanggal();
        console.log(this.member);

        this.id_card_number = data["data"].id_card_number;

        this.finspot = data["urlattendance"];

        this.finger = this.sanitizer.bypassSecurityTrustUrl(this.finspot);
      });

    this.UserService.getSingleUser().subscribe((data: any) => {
      this.user = data["data"];
      console.log(this.user);
    });

    this.scheduleService
      .showClassRegistration(this.member.member_type_id)
      .subscribe((data: any) => {
        this.present = data["data"].present;

        console.log(data["data"]);
      });
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(result => {
        console.log(result);
      });
  }

  attendanceCheck() {
    // password true
    // if( this.checkPass() == true ) {

    // }

    this.UserService.userCheckPassword(
      this.user.staff_id,
      this.userForm.value
    ).subscribe((data: any) => {
      var pass = data;
      let formValue = this.userForm.value;
      formValue["user_id"] = this.user.user_id;
      formValue["member_id"] = this.activatedRoute.snapshot.params["id"];
      this.loading = true;
      if (pass != null && pass["status"] == 200) {
        this.attendanceService
          .createAttendance(formValue)
          .subscribe((data: any) => {
            if (data["status"] == "200") {
              $(".first_time").text(
                data["data"].date + " - " + data["data"].time
              );
              this.loading = false;
              $(".modal-header .close").trigger("click");
            } else {
              this.loading = false;
              $(".modal-header .close").trigger("click");
              alert(data["message"]);
            }
          });
      } else {
        alert("Your password is incorrect");
        this.loading = false;
      }
    });
  }

  classCheck() {
    this.UserService.userCheckPassword(
      this.user.staff_id,
      this.userForm.value
    ).subscribe((data: any) => {
      var pass = data;
      let formValue = this.userForm.value;
      formValue["schedule_id"] = this.userForm.controls["schedule_id"].value;
      formValue["user_id"] = this.user.user_id;
      formValue["member_id"] = this.activatedRoute.snapshot.params["id"];
      this.loading = true;
      if (pass != null && pass["status"] == 200) {
        this.classRegisterService
          .registerClass(formValue)
          .subscribe((data: any) => {
            if (data["status"] == "200") {
              $(".jadwal")
                .find(".notyet:eq(0)")
                .find(".checkmark")
                .after(
                  '<button class="delete_class ml-3 btn btn-danger btn-sm" (click)="cancelClass()">Cancel</button>'
                );
              $(".jadwal")
                .find(".notyet:eq(0)")
                .removeClass("notyet")
                .find("input")
                .prop("checked", true);
              this.loading = false;
              this.cancelClass();

              $(".modal-header .close").trigger("click");
            }
          });
      } else {
        alert("Your password is incorrect");
        this.loading = false;
      }
    });
  }

  cancelClass() {
    $(".delete_class").on("click", function(e) {
      e.preventDefault();
      $(this)
        .parents(".checkbox")
        .addClass("notyet")
        .find("input")
        .prop("checked", false);
      $(this)
        .delay(300)
        .remove();
    });
  }

  getTanggal() {
    var d = new Date();

    var month = d.getMonth() + 1;
    var day = d.getDate();

    var output =
      d.getFullYear() +
      "/" +
      (month < 10 ? "0" : "") +
      month +
      "/" +
      (day < 10 ? "0" : "") +
      day;
    return output;
  }

  buildFormBasic() {
    this.formBasic = this.fb.group({
      experience: []
    });
  }

  submit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.toastr.success("Profile updated.", "Success!", {
        progressBar: true
      });
    }, 3000);
  }
}

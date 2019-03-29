import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
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
import { ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DomSanitizer } from "@angular/platform-browser";
import { ClassesService } from "src/app/shared/services/classes.service";
import * as $ from "jquery";
import "datatables.net";
import "datatables.net-bs4";
//import { setTimeout } from "timers";
import { timeout } from "rxjs/operators";

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
  absen: FormGroup;
  password_att;
  password_class;
  public todayDate: any;
  finger;
  finspot;
  present;
  id_card_number;
  classes;
  todayName;
  history;
  classhistory: any;
  memberid: any;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private memberService: MemberService,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private UserService: UserService,
    private attendanceService: AttendanceService,
    private scheduleService: ScheduleService,
    private ClassesService: ClassesService,
    private sanitizer: DomSanitizer,
    private chRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    var mod = this;
    this.member = { make: "" };
    this.expirydate = { make: "" };
    this.user = { make: "" };
    this.firstTime = { make: "" };
    this.classes = { make: "" };
    this.classhistory = { make: "" };
    this.memberid = { make: "" };
    this.buildFormBasic();
    this.radioGroup = this.fb.group({
      radio: []
    });

    // get today's day name

    this.userForm = this.fb.group({
      password: ["", Validators.required],
      schedule_id: ["", Validators.required],
      user_id: ["", Validators.required]
    });

    this.absen = this.fb.group({
      member_id: ["", Validators.required],
      user_id: ["", Validators.required],
      schedule_id: ["", Validators.required],
      date: ["", Validators.required],
      time: ["", Validators.required],
      automatic: ["", Validators.required]
    });

    //Get Member Detail
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
        var member = this.member;
        var date = new Date(data["data"]["expairy_date"]);
        var list = date.toUTCString().split(" ");
        //results.push(list[1]+" "+list[2]);
        this.expirydate = list[1] + " " + list[2] + " " + list[3];
        //console.log( this.member );
        this.todayDate = this.getTanggal();
        //console.log(this.member['id']);

        this.id_card_number = data["data"].id_card_number;

        this.finspot = data["urlattendance"];

        this.finger = this.sanitizer.bypassSecurityTrustUrl(this.finspot);

        this.ClassesService.getClasses(this.member.member_type_id).subscribe(
          (data: any) => {
            this.classes = data["data"];
            var obj = this.classes;
            var days = [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ];
            var d = new Date();
            var n = d.getDay();
            var todayName = days[n];
            $.each(obj, function(i, item) {
              if (item.day === todayName) {
                // Print Jadwal
                if (mod.hasmatch(item.log, "member_id", member.id)) {
                  var logarray = item.log;
                  var _index = logarray.findIndex(
                      x => x.member_id === member.id
                    ),
                    _iscanceled = item.log[_index].canceled,
                    _logid = item.log[_index]["id"];

                  if (_iscanceled == 1) {
                    var _checked = "";
                    var _cancelbtn = "";
                    var _class = "notyet";
                  } else {
                    var _class = "";
                    var _checked = "checked";
                    var _cancelbtn =
                      '<button class="delete_class ml-3 btn btn-danger btn-sm text-light" data-logid="' +
                      _logid +
                      '">Cancel</button>';
                  }
                  console.log(_checked);
                } else {
                  var _class = "notyet",
                    _checked = "",
                    _cancelbtn = "",
                    _logid = null;
                }

                var markup =
                  '<label class="checkbox checkbox-success ' +
                  _class +
                  '">' +
                  '<input type="checkbox" disabled ' +
                  _checked +
                  " name=" +
                  item.schedule_id +
                  ">" +
                  "<span>" +
                  item.time +
                  " - " +
                  item.exercise +
                  '</span><span class="checkmark"></span>' +
                  _cancelbtn +
                  "</label>";
                // Apend
                $(".jadwal").append(markup);
              }
            });
            setTimeout(() => {
              mod.cancelClass();
            }, 1000);
          }
        );
      });

    // Get single User
    this.UserService.getSingleUser().subscribe((data: any) => {
      this.user = data["data"];
      // console.log(this.user);
    });

    this.scheduleService
      .showClassRegistration(this.member.member_type_id)
      .subscribe((data: any) => {
        this.present = data["data"].present;

        //console.log(data["data"]);
      });

    // Class History
    this.ClassesService.classCheck(
      this.activatedRoute.snapshot.params["id"]
    ).subscribe((data: any) => {
      this.classhistory = data["data"];
      console.log(this.classhistory);
    });
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(result => {
        console.log(result);
      });
  }

  openLg(content) {
    this.modalService.open(content, { windowClass: "big-modal" });
    setTimeout(() => {
      this.chRef.detectChanges();
      $("#mytable").DataTable();
    }, 1000);
  }

  attendanceCheck() {
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
    var mod = this;
    this.UserService.userCheckPassword(
      this.user.staff_id,
      this.userForm.value
    ).subscribe((data: any) => {
      var pass = data;
      this.loading = true;
      if (pass != null && pass["status"] == 200) {
        var toCheckIn = $(".jadwal")
          .find(".notyet:eq(0)")
          .find("input")
          .attr("name");
        //console.log(toCheckIn);

        this.absen.setValue({
          member_id: this.member.id,
          user_id: this.user.id,
          schedule_id: toCheckIn,
          date: this.getTanggal(),
          time: this.firstTime,
          automatic: 0
        });

        this.ClassesService.classCheckIn(this.absen.value).subscribe(
          (data: any) => {
            var res = data["data"];
            var member = mod.member;
            console.log(data["message"]);
            console.log(data["data"]);

            if (mod.hasmatch(res, "member_id", member.id)) {
              var logarray = res;
              var _index = logarray.findIndex(x => x.member_id === member.id),
                _iscanceled = res[_index].canceled,
                _logid = res[_index]["id"];

              if (_iscanceled == 1) {
                var _checked = "";
                var _class = "notyet";
              } else {
                var _class = "";
                var _checked = "checked";
              }
              var _cancelbtn =
                '<button class="delete_class ml-3 btn btn-danger btn-sm text-light" data-logid="' +
                _logid +
                '">Cancel</button>';
              $(".jadwal")
                .find(".notyet:eq(0)")
                .find(".checkmark")
                .after(_cancelbtn);
              $(".jadwal")
                .find(".notyet:eq(0)")
                .removeClass("notyet")
                .find("input")
                .prop("checked", true);
              console.log(_checked);
            }

            this.loading = false;
            this.cancelClass();
          }
        );

        $(".modal-header .close").trigger("click");
      } else {
        alert("Your password is incorrect");
        this.loading = false;
      }
    });
  }

  hasmatch(array, key, value) {
    var matches = array.filter(function(element) {
      return element[key] === value;
    });

    return matches.length > 0;
  }

  cancelClass() {
    //alert("clicked");
    var mod = this;
    let formValue = this.userForm.value;
    formValue["user_id"] = mod.user.id;

    console.log(formValue);
    $(".delete_class").on("click", function(e) {
      e.preventDefault();
      var btn = $(this);
      var id = $(this).data("logid");
      console.log(id);
      mod.ClassesService.classCancel(id, formValue).subscribe((data: any) => {
        if (data["status"] == 200) {
          console.log("deleted");
          $(btn)
            .parents(".checkbox")
            .addClass("notyet")
            .find("input")
            .prop("checked", false);
          $(btn)
            .delay(300)
            .remove();
        }
      });
      return false;
    });
  }

  getClock() {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = time;
    return dateTime;
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

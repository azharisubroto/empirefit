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
import { FingerService } from "src/app/shared/services/finger.service";
import { ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DomSanitizer } from "@angular/platform-browser";
import { ClassesService } from "src/app/shared/services/classes.service";
import { interval } from "rxjs/observable/interval";
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
  finger_class;
  finspot_class;
  present;
  id_card_number;
  classes;
  gymhistory;
  todayName;
  history;
  classhistory: any;
  memberid: any;
  first_time;
  schedule;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private memberService: MemberService,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private UserService: UserService,
    private attendanceService: AttendanceService,
    private scheduleService: ScheduleService,
    private fingerService: FingerService,
    private ClassesService: ClassesService,
    private sanitizer: DomSanitizer,
    private chRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    var mod = this;
    this.member = { make: "" };
    this.expirydate = { make: "" };
    this.user = { make: "" };
    this.firstTime = { make: "" };
    this.classes = { make: "" };
    this.classhistory = { make: "" };
    this.gymhistory = { make: "" };
    this.memberid = { make: "" };
    this.buildFormBasic();
    this.radioGroup = this.fb.group({
      radio: []
    });

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
        $("#code-first_time").text((data["data"].first_time[0].classtime) ? data["data"].first_time[0].classtime : "n/a");
        // console.log(data["data"].first_time[0].classtime)
        if (data["data"].member_type_id == null) {
          $("#btn-manualreg").attr("disabled", "disabled");
          $("#btn-manualattendance").attr("disabled", "disabled");

          $("#btn-attendance").addClass("disabled");

          $("#btn-attendance").addClass("disabled");
          $("#btn-history").addClass("disabled");
          $("#btn-autoreg").addClass("disabled");

          $("#btn-classhis").addClass("disabled");
          $("#btn-ptsession").addClass("disabled");
          $("#btn-membership-history").addClass("disabled");
          $("#btn-membership-leave").addClass("disabled");
        }

        // 10 Pass Membership
        if (data["data"].member_type_id == 4) {
          if (data["data"].session_remains == 0) {
            $("#btn-manualreg").attr("disabled", "disabled");
            $("#btn-manualattendance").attr("disabled", "disabled");

            $("#btn-attendance").addClass("disabled");

            $("#btn-attendance").addClass("disabled");
            $("#btn-history").addClass("disabled");
            $("#btn-autoreg").addClass("disabled");

            $("#btn-classhis").addClass("disabled");
            $("#btn-ptsession").addClass("disabled");
            $("#btn-membership-leave").addClass("disabled");
          }
        }

        if (data["data"].member_type_id == 3) {
          if (data["data"].session_remains > 0) {
            $("#btn-ptsession").removeClass("disabled");
          } else {
            $("#btn-ptsession").addClass("disabled");
          }
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

        // Auto Attendance
        this.finspot = data["urlattendance"];
        this.finger = this.sanitizer.bypassSecurityTrustUrl(this.finspot);

        // Auto RegistrationClass
        this.finspot_class = data["urlregistrationclass"];
        this.finger_class = this.sanitizer.bypassSecurityTrustUrl(this.finspot_class);

        this.ClassesService.getClasses(this.member.member_type_id).subscribe(
          (data: any) => {
            // console.log(data["data"])
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
            var t = d.getTime();
            var todayName = days[n];
            $('.class-loading').remove();
            $.each(obj, function (i, item) {
              if (item.day === todayName) {
                // console.log('jam ' + mod.getClock());
                // console.log('jam item ' + item.time_schedule);
                // Print Jadwal
                if (mod.hasmatch(item.log, "member_id", member.id)) {
                  var logarray = item.log;
                  var _index = logarray.findIndex(x => x.member_id === member.id),
                    _iscanceled = item.log[_index].canceled,
                    _logid = item.log[_index]["id"];

                  // if late 
                  if (item.time_schedule < mod.getClock()) {
                    if (_iscanceled == 1) {
                      var _checked = "checked";
                      var _disabled = "disabled";
                      var _cancelbtn = "";
                      var _class = "notavailable";
                      var _checkbox_class = "checkbox-secondary";
                    } else {
                      var _class = "notavailable";
                      var _disabled = "disabled";
                      var _checkbox_class = "checkbox-success";
                      var _checked = "checked";
                      var _cancelbtn = "";
                    }

                    //belom lewat
                  } else {
                    if (_iscanceled == 1) {
                      var _class = "notyet";
                      var _disabled = "";
                      var _checkbox_class = "checkbox-success";
                      var _checked = "";
                      var _cancelbtn = "";
                    } else {
                      var _class = "notyet";
                      var _disabled = "disabled";
                      var _checkbox_class = "checkbox-success";
                      var _checked = "checked";
                      var _cancelbtn =
                        '<button class="delete_class ml-3 btn btn-danger btn-sm text-light" data-logid="' +
                        _logid +
                        '" style="color: #fff!important">Cancel</button>';
                    }
                  }
                  // console.log(_checked);
                } else {
                  var _class = "notyet",
                    _checked = "",
                    _cancelbtn = "",
                    _logid = null,
                    _disabled = "disabled";

                  if (item.time_schedule < mod.getClock()) {
                    var _class = "notavailble",
                      _checked = "",
                      _cancelbtn = "",
                      _logid = null,
                      _disabled = "disabled",
                      _checkbox_class = "checkbox-success";
                  } else {
                    var _class = "notyet",
                      _checked = "",
                      _cancelbtn = "",
                      _logid = null,
                      _disabled = "",
                      _checkbox_class = "checkbox-success";
                  }
                }

                var markup =
                  `<label class="checkbox ` + _checkbox_class + " " + _class + `" data-logstring="` + _logid + `">
                    <input class="`+ _logid + `" name="schedulepick" type="checkbox" ` + _disabled + " " + _checked + ` value="` + item.schedule_id + `">
                    <span>` + item.time + "-" + item.exercise + `</span>
                    <span class="checkmark"></span> ` + _cancelbtn + `
                  </label>`;
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
      });

    // Class History
    this.ClassesService.classCheck(
      this.activatedRoute.snapshot.params["id"]
    ).subscribe((data: any) => {
      this.classhistory = data["data"];
      // console.log(this.classhistory);
    });

    // Attendance History
    this.attendanceService
      .attendanceHistory(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.gymhistory = JSON.parse(JSON.stringify(data["data"]));
        // console.log(this.gymhistory);
      });
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(result => {
        //console.log(result);
      });
  }

  openLg(content) {
    this.modalService.open(content, { windowClass: "big-modal" });
    setTimeout(() => {
      this.chRef.detectChanges();
      $("#mytable").DataTable();
    }, 1000);
  }

  // Check Attendance
  attendanceCheck() {
    this.UserService.userCheckPassword(
      this.user.staff_id,
      this.userForm.value
    ).subscribe((data: any) => {
      var pass = data;
      let formValue = this.userForm.value;
      formValue["user_id"] = this.user.id;
      // console.log(this.user.id);
      formValue["member_id"] = this.activatedRoute.snapshot.params["id"];
      this.loading = true;
      if (pass != null && pass["status"] == 200) {
        this.attendanceService
          .createAttendance(formValue)
          .subscribe((data: any) => {
            if (data["status"] == "200") {
              $(".first_time").text(data["data"].time);
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

  // Cek Class
  classCheck() {
    var mod = this;
    this.UserService.userCheckPassword(
      this.user.staff_id,
      this.userForm.value
    ).subscribe((data: any) => {
      var pass = data;
      this.loading = true;
      if (pass != null && pass["status"] == 200) {
        let dataSchedule = [];
        $.each($("input[name='schedulepick']:checked"), function () {
          dataSchedule.push($(this).val());
        });
        //console.log(toCheckIn);

        this.absen.setValue({
          member_id: this.member.id,
          user_id: this.user.id,
          schedule_id: dataSchedule,
          date: this.getTanggal(),
          time: this.firstTime,
          automatic: 0
        });

        this.ClassesService.classCheckIn(this.absen.value).subscribe(
          (data: any) => {
            var res = data["data"];
            // console.log(data["message"]);
            // console.log(data["data"]);
            let obj = data["data"].schedule_id;

            $.each(obj, function (i, item) {
              // console.log(item);
              var _cancelbtn =
                '<button class="delete_class ml-3 btn btn-danger btn-sm text-light" style="color:#fff!important" data-logid="' +
                item +
                '">Cancel</button>';
              $('[name="schedulepick"][value="' + item + '"]').prop("disabled", true).parents('.checkbox').removeClass('notyet').find(".checkmark").after(_cancelbtn);
            });

            setTimeout(() => {
              if ($('[name="schedulepick"]').is(':checked')) {
                $('[name="schedulepick"]:checked').each(function () {
                  let _ini = $(this);
                  let _parent = _ini.parents('.checkbox');
                  let _delBtn = _parent.find('.delete_class');
                  let _newlogID = _parent.data('logstring');
                  // console.log(_newlogID);
                  _delBtn.attr('data-logid', _newlogID);
                });
              }
            }, 500);

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
    var matches = array.filter(function (element) {
      return element[key] === value;
    });

    return matches.length > 0;
  }

  // Cancel Class
  cancelClass() {
    //alert("clicked");
    var mod = this;
    let formValue = this.userForm.value;
    formValue["user_id"] = mod.user.id;

    //console.log(formValue);
    $(".delete_class").on("click", function (e) {
      e.preventDefault();
      var btn = $(this);
      var id = $(this).data("logid");
      // console.log(id);
      mod.ClassesService.classCancel(id, formValue).subscribe((data: any) => {
        if (data["status"] == 200) {
          // console.log("deleted");
          $(btn)
            .parents(".checkbox")
            .addClass("notyet")
            .find("input")
            .prop("checked", false)
            .prop("disabled", false);
          $(btn)
            .parents(".checkbox")
            .find("." + id + "")
          $(btn)
            .delay(300)
            .remove();
        }
      });
      return false;
    });
  }

  // Check Auto Atendance
  checkAttendance() {
    const source = interval(3000),
      subscribe = source.subscribe(val => {
        this.fingerService
          .checkAttendance(this.activatedRoute.snapshot.params["id"])
          .subscribe((data: any) => {
            if (data["status"] === "200") {
              subscribe.unsubscribe();
              setTimeout(() => {
                $("#code-first_time").text(data["date"]);
              });
              this.toastr.success(data["message"], "Success", {
                progressBar: true
              });
              $("#finger-status").text("Success");
            } else {
              subscribe.unsubscribe();
              setTimeout(() => {
                $("#code-first_time").text("n/a");
              });
              this.toastr.error(data["message"], "Error", {
                progressBar: true
              });
            }
          });
      });
  }

  // Check Auto Registration Class
  checkAutoRegistrationClass() {
    let formValue = this.userForm.value;
    let dataSchedule = [];
    $.each($("input[name='schedulepick']:checked"), function () {
      dataSchedule.push($(this).val());
    });
    formValue['schedule_id'] = dataSchedule;
    const source = interval(3000),
      subscribe = source.subscribe(val => {
        this.fingerService
          .checkAutoRegClass(this.activatedRoute.snapshot.params["id"], formValue)
          .subscribe((data: any) => {
            if (data["status"] === "200") {

              subscribe.unsubscribe();
              this.toastr.success(data["message"], "Success", {
                progressBar: true
              });

              var res = data["data"];
              // console.log(data["message"]);
              // console.log(data["data"]);
              let obj = data["schedule_id"];

              $.each(obj, function (i, item) {
                // console.log(item);
                var _cancelbtn =
                  '<button class="delete_class ml-3 btn btn-danger btn-sm text-light" style="color:#fff!important" data-logid="' +
                  item +
                  '">Cancel</button>';
                $('[name="schedulepick"][value="' + item + '"]').prop("disabled", true).parents('.checkbox').removeClass('notyet').find(".checkmark").after(_cancelbtn);
              });

              setTimeout(() => {
                if ($('[name="schedulepick"]').is(':checked')) {
                  $('[name="schedulepick"]:checked').each(function () {
                    let _ini = $(this);
                    let _parent = _ini.parents('.checkbox');
                    let _delBtn = _parent.find('.delete_class');
                    let _newlogID = _parent.data('logstring');
                    // console.log(_newlogID);
                    _delBtn.attr('data-logid', _newlogID);
                  });
                }
              }, 500);

              this.loading = false;
              this.cancelClass();

            } else {
              subscribe.unsubscribe();
              this.toastr.error(data["message"], "Error", {
                progressBar: true
              });
            }
          });
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
      (today.getHours() < 10 ? '0' : '') + today.getHours() + "" + (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
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

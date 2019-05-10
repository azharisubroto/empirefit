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
import { PersonaltrainerService } from "src/app/shared/services/personaltrainer.service";
import { HealthQuestionsService } from "src/app/shared/services/health-questions.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DomSanitizer } from "@angular/platform-browser";
import { ClassesService } from "src/app/shared/services/classes.service";
import { interval } from "rxjs/observable/interval";
import 'rxjs/Rx';
import * as $ from "jquery";
import "datatables.net";
import "datatables.net-bs4";
import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';
import 'xlsx';
import 'jspdf-autotable';
import 'tableexport';
import 'html2canvas';
import html2canvas from 'html2canvas';
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
  finspotscan;
  fingerscan;
  finger_class;
  finspot_class;
  device_name;
  statusfinger;
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
  personaltrainername;
  recuring_date;
  payment_unpaid;
  status;
  full_recuring_date;
  leaves;
  cc_autodebit_payment: boolean = false;
  status_leave: boolean = false;
  status_unpaid: boolean = false;
  finance_notes;
  healthquestions;
  recuring_payment;
  credit_cards;
  device;
  vc;
  signature_base64;
  liability_signature_base64;
  liability_user_signature_base64;

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
    private personalTrainerService: PersonaltrainerService,
    private sanitizer: DomSanitizer,
    private chRef: ChangeDetectorRef,
    private router: Router,
    private healthQuestionService: HealthQuestionsService,
  ) { }

  ngOnInit() {
    var mod = this;
    this.member = { make: "" };
    this.device = { make: "" };
    this.credit_cards = { make: "" };
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
        console.log(data["data"])

        $("#code-first_time").text((data["data"].first_time[0].classtime) ? data["data"].first_time[0].classtime : "n/a");
        // console.log(data["data"].first_time[0].classtime)

        this.member = data["data"];
        this.device = data["data"].data_finger;
        this.credit_cards = data["data"].credit_cards ? data["data"].credit_cards : null;
        this.leaves = data["data"].leaves;

        if (this.member.state == "Leave") {
          this.status_leave = true;
        } else {
          this.status_leave = false;
        }

        if (this.member.state == "Unpaid") {
          this.status_unpaid = true;
        } else {
          this.status_unpaid = false;
        }

        if (this.member.auto_debet == "0") {
          this.cc_autodebit_payment = false;
        } else {
          this.cc_autodebit_payment = true;
        }

        var member = this.member;
        var date = new Date(data["data"]["expairy_date"]);
        var active_date = new Date(data["data"]["active_date"]);
        var list = date.toUTCString().split(" ");
        //results.push(list[1]+" "+list[2]);
        this.expirydate = this.member.expairy_date;
        //console.log( this.member );
        this.todayDate = this.getTanggal();
        this.status = data["data"].state;
        //console.log(this.member['id']);

        this.id_card_number = data["data"].id_card_number;
        this.signature_base64 = data["data"].signature_download;
        this.liability_signature_base64 = data["data"].liability_signature_base64;
        this.liability_user_signature_base64 = data["data"].liability_user_signature_base64;
        this.recuring_date = this.member.recuring_date;
        this.recuring_payment = data["data"].auto_debits ? data["data"].auto_debits.recuring_payment : 0;
        this.full_recuring_date = data["data"].auto_debits ? data["data"].auto_debits.date : "-";
        this.payment_unpaid = data["data"].auto_debits ? data["data"].auto_debits.unpaid : "0";
        // console.log(this.payment_unpaid)
        this.finance_notes = data["data"].auto_debits ? data["data"].auto_debits.finance_notes : "0";

        // console.log(this.recuring_payment);

        let today = this.todayDate.replace(/\//g, '-'),
          sekarang = new Date(today);

        if (this.status != "Unverified") {
          if (date < sekarang) {
            this.memberService.updateStatus(this.activatedRoute.snapshot.params["id"], this.status).subscribe((data: any) => {
              this.status = data["status_member"];
            });
          }
        }

        if (this.status_leave) {
          if (active_date < sekarang) {
            this.memberService.updateStatusLeave(this.activatedRoute.snapshot.params["id"], this.status).subscribe((data: any) => {
              if (data["status"] == "200") {
                this.status_leave = false;
              }
            })
          }
        }

        setTimeout(() => {
          if (this.status_leave) {
            $("#btn-manualreg").attr("disabled", "disabled");
            $("#btn-manualattendance").attr("disabled", "disabled");
            $("#btn-fingerscan").addClass('disabled');

            $("#btn-attendance").addClass("disabled");

            $("#btn-attendance").addClass("disabled");
            $("#btn-autoreg").addClass("disabled");

            $("#btn-ptsession").addClass("disabled");
            $("#btn-membership").addClass("disabled");
            $("#btn-membership-leave").addClass("disabled");
            $("#btn-payment-update").addClass('disabled');
            $("#pdf-bio").removeAttr("disabled");
          } else {
            if (data["data"].member_type_id == null) {
              $("#btn-attendance").addClass("disabled");
              $("#btn-fingerscan").addClass('disabled');

              $("#btn-attendance").addClass("disabled");
              $("#btn-history").addClass("disabled");
              $("#btn-autoreg").addClass("disabled");

              $("#btn-manualreg").attr("disabled", "disabled");
              $("#btn-manualattendance").attr("disabled", "disabled");
              $("#pdf-bio").attr("disabled", "disabled");
              $("#btn-classhis").attr("disabled", "disabled");
              $("#btn-membership-leave").attr("disabled", "disabled");
              $("#btn-membership-leave-history").attr("disabled", "disabled");

              $("#btn-ptsession").addClass("disabled");
              $("#btn-membership-history").addClass("disabled");

              $("#btn-payment-update").removeClass('disabled');
            }

            // 10 Pass Membership
            if (data["data"].member_type_id == 4) {
              if (data["data"].session_remains == 0) {
                $("#btn-manualreg").attr("disabled", "disabled");
                $("#btn-manualattendance").attr("disabled", "disabled");

                $("#btn-attendance").addClass("disabled");

                $("#btn-attendance").addClass("disabled");
                $("#btn-autoreg").addClass("disabled");

                $("#btn-ptsession").addClass("disabled");
              }
            }

            if (data["data"].member_type_id == 3) {
              this.personalTrainerService.personalTrainerMember(this.activatedRoute.snapshot.params["id"]).subscribe((data: any) => {
                this.personaltrainername = data["data"].personal_trainer_name ? data["data"].personal_trainer_name : "-";
              })
              if (data["data"].session_remains > 0) {
                $("#btn-ptsession").removeClass("disabled");
              } else {
                $("#btn-ptsession").addClass("disabled");
              }
            } else {
              $("#btn-ptsession").addClass("disabled");
              this.personaltrainername = null;
            }

            if (data["data"].member_type_id == 1 || data["data"].member_type_id == 5) {
              if (data["data"].auto_debet == 1) {
                if (this.status_leave) {
                  $("#btn-membership-leave").removeAttr("disabled");
                  $("#btn-membership-leave-history").removeAttr("disabled")
                } else {
                  $("#btn-membership-leave").attr("disabled", "disabled");
                  $("#btn-membership-leave-history").attr("disabled", "disabled");
                }
              } else {
                $("#btn-membership-leave").attr("disabled", "disabled");
                $("#btn-membership-leave-history").attr("disabled", "disabled");
              }
              $("#btn-ptsession").addClass("disabled");
            }

            if (data["data"].auto_debet == 1) {
              $("#btn-membership-leave").removeAttr("disabled");
              $("#btn-membership-leave-history").removeAttr("disabled")
            } else {
              $("#btn-membership-leave").attr("disabled", "disabled");
              $("#btn-membership-leave-history").attr("disabled", "disabled");
            }

            if (this.status == "Expired" || this.status == "Inactive" || this.status == "Unpaid") {
              $("#btn-manualreg").attr("disabled", "disabled");
              $("#btn-manualattendance").attr("disabled", "disabled");

              $("#btn-attendance").addClass("disabled");

              $("#btn-attendance").addClass("disabled");
              $("#btn-autoreg").addClass("disabled");

              $("#btn-ptsession").addClass("disabled");
              $("#btn-payment-update").removeClass('disabled');
            }
          }
        }, 200)

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
              if (item.day == todayName) {
                // console.log('jam ' + mod.getClock());
                // console.log('jam item ' + item.delay_time);
                // Print Jadwal
                if (mod.hasmatch(item.log, "member_id", member.id)) {
                  var logarray = item.log;
                  var _index = logarray.findIndex(x => x.member_id == member.id),
                    _iscanceled = item.log[_index].canceled,
                    _logid = item.log[_index]["id"];

                  // if late 
                  if (item.delay_time < mod.getClock()) {
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

                  if (item.delay_time < mod.getClock()) {
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
      this.device_name = data["data"].device_name;
      this.vc = data["data"].vc;

      this.memberService.checkFinger(this.activatedRoute.snapshot.params['id'], data["data"].vc).subscribe((data: any) => {
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

      this.memberService.getUrlFingerReg(this.activatedRoute.snapshot.params['id'], data["data"].vc).subscribe((data: any) => {

        // Registration Finger
        this.finspotscan = data['data'];
        this.fingerscan = this.sanitizer.bypassSecurityTrustUrl(this.finspotscan);

        // Auto Attendance
        this.finspot = data["urlattendance"];
        this.finger = this.sanitizer.bypassSecurityTrustUrl(this.finspot);

        // Auto RegistrationClass
        this.finspot_class = data["urlregistrationclass"];
        this.finger_class = this.sanitizer.bypassSecurityTrustUrl(this.finspot_class);
      });

    });

    //health questions
    this.healthQuestionService
      .getByMember(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.healthquestions = data["data"];
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

  // Check Finger Scan
  checkFingerScan() {
    const source = interval(3000),
      subscribe = source.subscribe(val => {
        this.fingerService
          .checkMemberRegistration(this.member.finger_code, this.vc)
          .subscribe((data: any) => {
            console.log(this.member.finger_code);
            if (data["status"] == "200") {
              subscribe.unsubscribe();
              this.toastr.success(data["message"], "Saved", {
                progressBar: true
              });
              setTimeout(() => {
                location.reload();
              }, 1000);
            } else {
              console.log("Checking finger . . .");
            }
          });
      });
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(result => {
        //console.log(result);
      });
  }

  disabledMenu() {
    setTimeout(() => {
      let today = this.todayDate.replace(/\//g, '-'),
        date = this.member.expairy_date,
        sekarang = new Date(today);

      if (this.member.state == "Expired") {
        setTimeout(() => {
          $("#btn-selectPackage").removeClass('disabled');
        }, 200);
      } else {
        setTimeout(() => {
          $("#btn-selectPackage").addClass('disabled');
        }, 200);
      }

      if (this.member.member_type_id == null) {
        setTimeout(() => {
          $("#btn-selectPackage").addClass('disabled');
          $("#btn-upgradePackage").addClass('disabled');
        }, 200);
      }
    }, 200)
  }

  downloadbio(id_card_number) {
    $('#pdf-bio').html('downloading...');
    // var mod = this;
    // var HTML_Width = $("#downloadbio").width();
    // var HTML_Height = $("#downloadbio").height();
    // var top_left_margin = 40;
    // var PDF_Width = HTML_Width + (top_left_margin * 2);
    // var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
    // var canvas_image_width = HTML_Width;
    // var canvas_image_height = HTML_Height;

    // var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;


    // html2canvas($("#downloadbio")[0], {
    //   allowTaint: true,
    //   scale: 1,
    // }).then(function (canvas) {
    //   canvas.getContext('2d');

    //   var imgData = canvas.toDataURL("image/jpeg", 1.0);
    //   var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
    //   pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);


    //   for (var i = 1; i <= totalPDFPages; i++) {
    //     pdf.addPage(PDF_Width, PDF_Height);
    //     pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
    //   }

    //   pdf.save("EFC-BIOLIA-" + mod.member.member_code + "-" + mod.member.name + ".pdf");
    // });

    let tosend = ({
      data: this.member,
      health: this.healthquestions
    })

    this.memberService.downloadBioLiability(this.activatedRoute.snapshot.params['id'], tosend).subscribe((data: any) => {
      const linkSource = data['data'];
      const downloadLink = document.createElement("a");
      const fileName = data['filename'];

      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
      $('#pdf-bio').html('Bio & Liability (PDF)');
    });

    // var doc = new jsPDF('p', 'pt', 'letter');

    // // We'll make our own renderer to skip this editor
    // var specialElementHandlers = {
    //   '#editor': function (element, renderer) {
    //     return true;
    //   }
    // };
    // // doc.addImage(this.liability_signature_base64, 'PNG', 15, 800, 211, 150);
    // // doc.addImage(this.liability_user_signature_base64, 'PNG', 15, 800, 211, 150);
    // doc.fromHTML($('#downloadbio').get(0), 15, 25, {
    //   'pagesplit': true,
    //   'width': 550,
    //   'useCORS': false,
    //   'margins': {
    //     top: 40,
    //     bottom: 60,
    //     left: 40,
    //     width: 522
    //   },
    //   'elementHandlers': specialElementHandlers
    // }, function (dispose) {
    //   doc.save('EFC_bio-liability_' + id_card_number + '.pdf');
    // });
  }

  downloadSigning(id_card_number) {
    var doc = new jsPDF('p', 'pt', 'letter');

    // We'll make our own renderer to skip this editor
    var specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };
    doc.addImage(this.signature_base64, 'PNG', 15, 450, 211, 150);
    doc.fromHTML($('#downloadsigningform').get(0), 15, 25, {
      'pagesplit': true,
      'width': 550,
      'useCORS': false,
      'elementHandlers': specialElementHandlers
    }, function (dispose) {
      doc.save('EFC_signing_form_' + id_card_number + '.pdf');
    });

  }

  openLg(content) {
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
              this.toastr.success(data["message"], "Success", {
                progressBar: true
              });
              $(".modal-header .close").trigger("click");
            } else {
              this.loading = false;
              this.toastr.error(data["message"], "Not Success", {
                progressBar: true
              });
              $(".modal-header .close").trigger("click");
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
            var res = data;
            // return console.log(res.schedule_id)
            // console.log(data["message"]);
            // console.log(data["data"]);
            // let obj = res.schedule_id;

            // $.each(obj, function (i, item) {
            //   console.log(item);
            //   var _cancelbtn =
            //     '<button class="delete_class ml-3 btn btn-danger btn-sm text-light" style="color:#fff!important" data-logid="' +
            //     item +
            //     '">Cancel</button>';
            //   $('[name="schedulepick"][value="' + item + '"]').prop("disabled", true).parents('.checkbox').removeClass('notyet').find(".checkmark").after(_cancelbtn);
            // });

            // setTimeout(() => {
            //   if ($('[name="schedulepick"]').is(':checked')) {
            //     $('[name="schedulepick"]:checked').each(function () {
            //       let _ini = $(this);
            //       let _parent = _ini.parents('.checkbox');
            //       let _delBtn = _parent.find('.delete_class');
            //       let _newlogID = _parent.data('logstring');
            //       // console.log(_newlogID);
            //       _delBtn.attr('data-logid', _newlogID);
            //     });
            //   }
            // }, 500);

            this.loading = false;

            if (res.status == '200') {
              this.toastr.success('ClassRegistration Success', "Success", {
                progressBar: true
              });

              setTimeout(() => {
                location.reload();
              }, 1000);

            } else {
              this.toastr.error('ClassRegistration Failed', "Error!", {
                progressBar: true
              });
            }
            // this.cancelClass();
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
      return element[key] == value;
    });

    return matches.length > 0;
  }

  // Cancel Class
  cancelClass() {
    //alert("clicked");
    var mod = this;
    let formValue = this.userForm.value;
    formValue["user_id"] = mod.user.id;
    formValue["member_id"] = this.activatedRoute.snapshot.params['id'];

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
            if (data["status"] == "200") {
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
            if (data["status"] == "200") {

              this.loading = false;

              subscribe.unsubscribe();
              this.toastr.success(data["message"], "Success", {
                progressBar: true
              });

              setTimeout(() => {
                location.reload();
              }, 1000);

              // var res = data["data"];
              // // console.log(data["message"]);
              // // console.log(data["data"]);
              // let obj = data["schedule_id"];

              // $.each(obj, function (i, item) {
              //   // console.log(item);
              //   var _cancelbtn =
              //     '<button class="delete_class ml-3 btn btn-danger btn-sm text-light" style="color:#fff!important" data-logid="' +
              //     item +
              //     '">Cancel</button>';
              //   $('[name="schedulepick"][value="' + item + '"]').prop("disabled", true).parents('.checkbox').removeClass('notyet').find(".checkmark").after(_cancelbtn);
              // });

              // setTimeout(() => {
              //   if ($('[name="schedulepick"]').is(':checked')) {
              //     $('[name="schedulepick"]:checked').each(function () {
              //       let _ini = $(this);
              //       let _parent = _ini.parents('.checkbox');
              //       let _delBtn = _parent.find('.delete_class');
              //       let _newlogID = _parent.data('logstring');
              //       // console.log(_newlogID);
              //       _delBtn.attr('data-logid', _newlogID);
              //     });
              //   }
              // }, 500);
              // this.cancelClass();

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

  // leave
  leaveCheck() {
    var mod = this;
    this.UserService.userCheckPassword(
      this.user.staff_id,
      this.userForm.value
    ).subscribe((data: any) => {
      var pass = data;
      this.loading = true;
      if (pass != null && pass["status"] == 200) {
        let formValue = ({
          'user_id': this.user.id,
          'duration': $("#duration").val()
        });

        this.memberService.memberLeave(this.activatedRoute.snapshot.params["id"], formValue).subscribe((data: any) => {
          if (data["status"] == "200") {
            this.loading = false;
            this.toastr.success(data["message"], "Success!", {
              progressBar: true
            });

            setTimeout(() => {
              location.reload();
            }, 500)

            $(".modal-header .close").trigger("click");
          } else {
            this.loading = false;
            this.toastr.error("Leave Error", "Not Success!", {
              progressBar: true
            });
          }
        });
      } else {
        alert("Your password is incorrect");
        this.loading = false;
      }
    });
  }

  // reactivated
  reactivateCheck() {
    var mod = this;
    this.UserService.userCheckPassword(
      this.user.staff_id,
      this.userForm.value
    ).subscribe((data: any) => {
      var pass = data;
      this.loading = true;
      if (pass != null && pass["status"] == 200) {
        let formValue = ({
          'user_id': this.user.id,
          'duration': $("#duration").val()
        });

        this.memberService.reactiveLeave(this.activatedRoute.snapshot.params["id"], formValue).subscribe((data: any) => {
          if (data["status"] == "200") {
            this.loading = false;
            this.toastr.success(data["message"], "Success!", {
              progressBar: true
            });

            setTimeout(() => {
              location.reload();
            }, 500)

            $(".modal-header .close").trigger("click");
          } else {
            this.loading = false;
            this.toastr.error("Reactivated Error", "Not Success!", {
              progressBar: true
            });
          }
        });
      } else {
        alert("Your password is incorrect");
        this.loading = false;
      }
    });
  }

  close() {
    $(".modal-header .close").trigger("click");
  }
}

import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { CustomValidators } from "ng2-validation";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { UserService } from "src/app/shared/services/user.service";
import { StaffService } from "src/app/shared/services/staff.service";
import { FingerService } from "src/app/shared/services/finger.service";
import { ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DomSanitizer } from "@angular/platform-browser";
import { interval } from "rxjs/observable/interval";
import { NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";
import * as $ from "jquery";
import "datatables.net";
import "datatables.net-bs4";
//import { setTimeout } from "timers";
import { timeout } from "rxjs/operators";

@Component({
  selector: 'app-staff-attendance',
  templateUrl: './staff-attendance.component.html',
  styleUrls: ['./staff-attendance.component.scss']
})
export class StaffAttendanceComponent implements OnInit {
  staff;
  name;
  date_of_birth;
  phone;
  position_name;
  photo;
  date;
  first_time;
  branch_name;
  attendanceHistory;
  finspot;
  finger;
  total_attendance;
  user;
  table;
  previewAttendance;
  userForm: FormGroup;
  filterForm: FormGroup;
  loading: boolean;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private UserService: UserService,
    private fingerService: FingerService,
    private staffService: StaffService,
    private sanitizer: DomSanitizer,
    private chRef: ChangeDetectorRef,
    private parserFormatter: NgbDateParserFormatter,
  ) { }

  ngOnInit() {
    this.staffService.showStaff(this.activatedRoute.snapshot.params["id"]).subscribe((data: any) => {
      this.staff = data["data"];
      this.name = this.staff.name;
      this.photo = this.staff.photo;
      this.date_of_birth = this.staff.date_of_birth;
      this.phone = this.staff.phone;
      this.position_name = this.staff.position[0].position_name;
      this.date = this.staff.date;
      this.branch_name = this.staff.branch_name;
      this.first_time = this.staff.attendance.first_time;
      this.attendanceHistory = data["data"].attendance.history;
      this.total_attendance = data["data"].total_attendance;
      console.log(this.total_attendance)

      this.chRef.detectChanges();
      setTimeout(() => {
        this.table = $("#mytable").DataTable({
          // scrollX: true,
        });
      }, 200);

      // Auto Attendance
      this.finspot = data["url_attendance"];
      this.finger = this.sanitizer.bypassSecurityTrustUrl(this.finspot);
    });

    this.filterForm = this.fb.group({
      date_first: [Validators.required],
      date_second: [Validators.required],
    });

    // Get single User
    this.UserService.getSingleUser().subscribe((data: any) => {
      this.user = data["data"];
      // console.log(this.user);
    });

    this.userForm = this.fb.group({
      password: ["", Validators.required],
      schedule_id: ["", Validators.required],
      user_id: ["", Validators.required]
    });
  }

  // Check Auto Atendance
  checkAttendance() {
    let formValue = ({
      'user_id': this.user.id,
    });

    const source = interval(3000),
      subscribe = source.subscribe(val => {
        this.fingerService
          .checkStaffAttendance(this.activatedRoute.snapshot.params["id"], formValue)
          .subscribe((data: any) => {
            if (data["status"] === "200") {
              subscribe.unsubscribe();
              setTimeout(() => {
                $(".first-time").text(data["date"]);
              });
              this.toastr.success(data["message"], "Success", {
                progressBar: true
              });
            } else {
              subscribe.unsubscribe();
              setTimeout(() => {
                $(".first-time").text("n/a");
              });
              this.toastr.error(data["message"], "Error", {
                progressBar: true
              });
            }
          });
      });
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
      formValue["staff_id"] = this.activatedRoute.snapshot.params["id"];
      this.loading = true;
      if (pass != null && pass["status"] == 200) {
        this.staffService
          .staffManualAttendance(formValue)
          .subscribe((data: any) => {
            if (data["status"] == "200") {
              $("#first_time").text(data["first_name"]);
              this.loading = false;
              this.toastr.success(data["message"], "Success", {
                progressBar: true
              });
              $(".modal-header .close").trigger("click");
              setTimeout(() => {
                location.reload();
              }, 3000)
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

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(result => {
        //console.log(result);
      });
  }

  searchHistory() {
    let first_date = this.filterForm.controls["date_first"].value;
    let second_date = this.filterForm.controls["date_second"].value;
    let formValues = ({
      'start_date': this.parserFormatter.format(first_date),
      'second_date': this.parserFormatter.format(second_date),
    });

    if (this.filterForm.invalid) {
      this.toastr.error("Please enter date", "Filter Failed", {
        progressBar: true
      });
    } else {
      var mod = this;
      this.table.destroy();
      var items: any = [];
      this.staffService.searchAttendance(this.activatedRoute.snapshot.params["id"], formValues).subscribe((data: any) => {
        var res = data['data'];
        $.each(res, function (i, item) {
          var newthis = [
            item.start_date,
            item.user_name,
          ];
          items.push(newthis);
        });
        mod.table = $('#mytable').DataTable({
          // scrollX: true,
          columns: [
            { title: 'Date Time' },
            { title: 'Verified By' },
          ],
          data: items,
        });
        setTimeout(() => {
          $(".total-attendance").text(data["total_attendance"]);
          console.log(data);
        }, 500);
      });
    }
  }

}

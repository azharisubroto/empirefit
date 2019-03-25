import { Component, OnInit } from "@angular/core";
import { CustomValidators } from "ng2-validation";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router, ActivatedRoute } from "@angular/router";
import { ScheduleService } from "src/app/shared/services/schedule.service";
import { StaffService } from "src/app/shared/services/staff.service";
import { BranchService } from "src/app/shared/services/branch.service";

@Component({
  selector: "app-basic-form",
  templateUrl: "./schedule-form.component.html",
  styleUrls: ["./schedule-form.component.scss"]
})
export class ScheduleFormComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  data;
  id;
  name;
  instructure_id;
  day;
  time;
  user_id;
  start_date;
  end_date;
  days;
  instructures;
  branches;
  staffs;
  getCoaches;
  scheduleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private scheduleService: ScheduleService,
    private staffService: StaffService,
    private branchService: BranchService
  ) {}

  ngOnInit() {
    this.scheduleForm = this.fb.group({
      day: ["", Validators.required],
      time: ["", Validators.required],
      exercise: ["", Validators.required],
      start_date: ["", Validators.required],
      end_date: ["", Validators.required],
      branch_id: [1, Validators.required]
    });

    this.branchService.getBranches().subscribe((data: any) => {
      this.branches = data["data"];
    });

    this.staffService.getStaffCoach().subscribe((data: any) => {
      this.staffs = data["data"];
    });

    this.days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];

    this.scheduleService
      .showCoach(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.getCoaches = data["data"];
        console.log(data["data"]);
        $.each(this.getCoaches, function(i, item) {
          $("input[name='staff'][value=" + item.staff_id + "]").prop(
            "checked",
            true
          );
        });
      });

    this.scheduleService
      .showSchedule(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.scheduleForm.setValue({
          day: data["data"].day,
          time: data["data"].time,
          exercise: data["data"].exercise,
          start_date: data["data"].start_date,
          end_date: data["data"].end_date,
          branch_id: data["data"].branch_id
        });
      });
  }

  submit() {
    let dataStaff = [];

    $.each($("input[name='staff']:checked"), function() {
      dataStaff.push($(this).val());
    });
    $(".staff-final").val(dataStaff);

    let start_date = this.scheduleForm.controls["start_date"].value;
    let end_date = this.scheduleForm.controls["end_date"].value;
    let day = this.scheduleForm.controls["day"].value;
    let time = this.scheduleForm.controls["time"].value;
    let exercise = this.scheduleForm.controls["exercise"].value;
    let branch_id = this.scheduleForm.controls["branch_id"].value;
    let formValues = this.scheduleForm.value;

    formValues["start_date"] = start_date;
    formValues["end_date"] = end_date;
    formValues["day"] = day;
    formValues["time"] = time;
    formValues["exercise"] = exercise;
    formValues["branch_id"] = branch_id;
    formValues["staff"] = dataStaff;

    console.log(dataStaff);

    if (this.scheduleForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.scheduleService
        .updateSchedule(
          this.activatedRoute.snapshot.params["id"],
          this.scheduleForm.value
        )
        .subscribe((res: any) => {
          setTimeout(() => {
            this.loading = false;
            if (res["status"] === "200") {
              this.toastr.success(res["message"], "Success!", {
                progressBar: true
              });
              this.router.navigateByUrl("master/schedule");
            } else {
              this.toastr.error(res["message"], "Error!", {
                progressBar: true
              });
            }
          }, 3000);
        });
    }
  }
}

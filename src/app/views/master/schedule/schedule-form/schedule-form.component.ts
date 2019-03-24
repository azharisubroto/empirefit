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
import { InstructureService } from "src/app/shared/services/instructure.service";
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
  scheduleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private scheduleService: ScheduleService,
    private instructureService: InstructureService,
    private branchService: BranchService
  ) {}

  ngOnInit() {
    this.scheduleForm = this.fb.group({
      day: ["", Validators.required],
      time: ["", Validators.required],
      instructure_id: ["", Validators.required],
      exercise: ["", Validators.required],
      start_date: ["", Validators.required],
      end_date: ["", Validators.required],
      branch_id: [1, Validators.required]
    });

    this.instructureService.getInstructures().subscribe((data: any) => {
      this.instructures = data["data"];
    });

    this.branchService.getBranches().subscribe((data: any) => {
      this.branches = data["data"];
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
      .showSchedule(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.scheduleForm.setValue({
          day: data["data"].day,
          time: data["data"].time,
          instructure_id: data["data"].instructure_id,
          exercise: data["data"].exercise,
          start_date: data["data"].start_date,
          end_date: data["data"].end_date,
          branch_id: data["data"].branch_id
        });
      });
  }

  submit() {
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

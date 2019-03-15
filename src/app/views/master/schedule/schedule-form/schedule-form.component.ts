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
  scheduleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private scheduleService: ScheduleService,
    private instructureService: InstructureService
  ) {}

  ngOnInit() {
    this.scheduleForm = this.fb.group({
      day: ["", Validators.required],
      time: ["", Validators.required],
      instructure_id: ["", Validators.required],
      start_date: ["", Validators.required],
      end_date: ["", Validators.required]
    });

    this.instructureService.getInstructures().subscribe((data: any) => {
      this.instructures = data["data"];
    });

    this.days = [
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
      "Minggu"
    ];

    this.scheduleService
      .showSchedule(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        console.log(data["data"][0]);
        this.scheduleForm.setValue({
          day: data["data"][0].day,
          time: data["data"][0].time,
          instructure_id: data["data"][0].instructure_id,
          start_date: data["data"][0].start_date,
          end_date: data["data"][0].end_date
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

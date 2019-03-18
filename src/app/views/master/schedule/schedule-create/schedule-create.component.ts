import { Component, OnInit } from "@angular/core";
import { CustomValidators } from "ng2-validation";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { ScheduleService } from "src/app/shared/services/schedule.service";
import { InstructureService } from "src/app/shared/services/instructure.service";
import { NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-basic-form",
  templateUrl: "./schedule-create.component.html",
  styleUrls: ["./schedule-create.component.scss"]
})
export class ScheduleCreateComponent implements OnInit {
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
  instructures;
  scheduleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private scheduleService: ScheduleService,
    private instructureService: InstructureService,
    private parserFormatter: NgbDateParserFormatter
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
  }

  submit() {
    let start_date = this.scheduleForm.controls["start_date"].value;
    let end_date = this.scheduleForm.controls["end_date"].value;
    let day = this.scheduleForm.controls["day"].value;
    let time = this.scheduleForm.controls["time"].value;
    let instructure_id = this.scheduleForm.controls["instructure_id"].value;
    let formValues = this.scheduleForm.value;
    formValues["start_date"] = this.parserFormatter.format(start_date);
    formValues["end_date"] = this.parserFormatter.format(end_date);
    formValues["day"] = day;
    formValues["time"] = time;
    formValues["instructure_id"] = instructure_id;
    if (this.scheduleForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.scheduleService.createSchedule(formValues).subscribe((res: any) => {
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

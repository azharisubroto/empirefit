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
import { HealthQuestionsService } from "src/app/shared/services/health-questions.service";

@Component({
  selector: "app-basic-form",
  templateUrl: "./health-questions-form.component.html",
  styleUrls: ["./health-questions-form.component.scss"]
})
export class HealthQuestionsFormComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  partner_name;
  healthQuestionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private healthQuestionsService: HealthQuestionsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.healthQuestionForm = this.fb.group({
      question: ["", Validators.required],
      published: ["1", Validators.required]
    });

    this.healthQuestionsService
      .showQuestion(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.healthQuestionForm.setValue({
          question: data["data"].question,
          published: data["data"].published
        });
      });
  }

  submit() {
    if (this.healthQuestionForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.healthQuestionsService
        .updateQuestion(
          this.activatedRoute.snapshot.params["id"],
          this.healthQuestionForm.value
        )
        .subscribe((res: any) => {
          setTimeout(() => {
            this.loading = false;
            if (res["status"] === "200") {
              this.toastr.success(res["message"], "Success!", {
                progressBar: true
              });
              this.router.navigateByUrl("master/health-questions");
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

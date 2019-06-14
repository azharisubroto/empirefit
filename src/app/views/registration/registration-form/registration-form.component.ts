import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from '@angular/forms';
import { HealthQuestionsService } from 'src/app/shared/services/health-questions.service';

@Component({ 
  selector: "app-registration-form",
  templateUrl: "./registration-form.component.html",
  styleUrls: ["./registration-form.component.scss"]
})
export class RegistrationFormComponent implements OnInit {
  isCompleted: boolean;
  questions: any;
  data: any = {
    email: ''
  };
  step2Form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private HealthQuestionsService: HealthQuestionsService
  ) { }

  ngOnInit() {
    this.questions = '';
    this.step2Form = this.fb.group({
      experience: [2]
    });

    this.HealthQuestionsService.getQuestions().subscribe((data: any) => {
      this.questions = data["data"];
      console.log(this.questions);
    });

    $('body').attr('id', 'registration');
  }

  ngOnDestroy() {
    $('body').attr('id', '');
  }

  onStep1Next(e) {}
  onStep2Next(e) {}
  onComplete(e) {}
}

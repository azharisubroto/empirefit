import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-wizard",
  templateUrl: "./member-edit.component.html",
  styleUrls: ["./member-edit.component.css"]
})
export class MemberEditComponent implements OnInit {
  isCompleted: boolean;
  data: any = {
    email: ""
  };
  step2Form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.step2Form = this.fb.group({
      experience: [2]
    });
  }

  onStep1Next(e) {}
  onStep2Next(e) {}
  onStep3Next(e) {}
  onComplete(e) {}
}

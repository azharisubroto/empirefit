import { Component, OnInit } from "@angular/core";
import { CustomValidators } from "ng2-validation";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-basic-form",
  templateUrl: "./dropin-company-form.component.html",
  styleUrls: ["./dropin-company-form.component.scss"]
})
export class DropinCompanyFormComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  radioGroup: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService) {}

  ngOnInit() {
    this.buildFormBasic();
    this.radioGroup = this.fb.group({
      radio: []
    });
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

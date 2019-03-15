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
import { DropinTypeService } from "src/app/shared/services/dropin-type.service";

@Component({
  selector: "app-basic-form",
  templateUrl: "./dropin-type-create.component.html",
  styleUrls: ["./dropin-type-create.component.scss"]
})
export class DropinTypeCreateComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  dropin_name;
  dropinTypeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private dropinTypeService: DropinTypeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.dropinTypeForm = this.fb.group({
      dropin_name: ["", Validators.required]
    });
  }

  submit() {
    if (this.dropinTypeForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.dropinTypeService
        .createDropinType(this.dropinTypeForm.value)
        .subscribe((res: any) => {
          setTimeout(() => {
            this.loading = false;
            if (res["status"] === "200") {
              this.toastr.success(res["message"], "Success!", {
                progressBar: true
              });
              this.router.navigateByUrl("master/dropin-type");
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

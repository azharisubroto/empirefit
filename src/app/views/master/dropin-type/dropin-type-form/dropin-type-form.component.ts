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
  templateUrl: "./dropin-type-form.component.html",
  styleUrls: ["./dropin-type-form.component.scss"]
})
export class DropinTypeFormComponent implements OnInit {
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
  ) { }

  ngOnInit() {
    this.dropinTypeForm = this.fb.group({
      dropin_name: ["", Validators.required]
    });

    this.dropinTypeService
      .showDropinType(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.dropinTypeForm.setValue({
          dropin_name: data["data"].dropin_name
        });
      });
  }

  submit() {
    if (this.dropinTypeForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.dropinTypeService
        .updateDropinType(
          this.activatedRoute.snapshot.params["id"],
          this.dropinTypeForm.value
        )
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

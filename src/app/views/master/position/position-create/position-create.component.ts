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
import { PositionService } from "src/app/shared/services/position.service";

@Component({
  selector: "app-basic-form",
  templateUrl: "./position-create.component.html",
  styleUrls: ["./position-create.component.scss"]
})
export class PositionCreateComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  position_name;
  positionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private positionService: PositionService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.positionForm = this.fb.group({
      position_name: ["", Validators.required]
    });
  }

  submit() {
    if (this.positionForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.positionService
        .createPosition(this.positionForm.value)
        .subscribe((res: any) => {
          setTimeout(() => {
            this.loading = false;
            if (res["status"] === "200") {
              this.toastr.success(res["message"], "Success!", {
                progressBar: true
              });
              this.router.navigateByUrl("master/position");
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

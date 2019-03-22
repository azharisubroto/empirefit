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
  templateUrl: "./position-form.component.html",
  styleUrls: ["./position-form.component.scss"]
})
export class PositionFormComponent implements OnInit {
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

    this.positionService
      .showPosition(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.positionForm.setValue({
          position_name: data["data"].position_name
        });
      });
  }

  submit() {
    if (this.positionForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.positionService
        .updatePosition(
          this.activatedRoute.snapshot.params["id"],
          this.positionForm.value
        )
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

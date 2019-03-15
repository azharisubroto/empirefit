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
import { PaymentTypeService } from "src/app/shared/services/payment-type.service";

@Component({
  selector: "app-basic-form",
  templateUrl: "./payment-type-form.component.html",
  styleUrls: ["./payment-type-form.component.scss"]
})
export class PaymentTypeFormComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  payment_type_name;
  paymentTypeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private paymentTypeService: PaymentTypeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.paymentTypeForm = this.fb.group({
      id: [""],
      payment_type_name: ["", Validators.required]
    });

    this.paymentTypeService
      .showPaymentType(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.paymentTypeForm.setValue({
          id: data["data"].id,
          payment_type_name: data["data"].payment_type_name
        });
      });
  }

  submit() {
    if (this.paymentTypeForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.paymentTypeService
        .updatePaymentType(
          this.activatedRoute.snapshot.params["id"],
          this.paymentTypeForm.value
        )
        .subscribe((res: any) => {
          setTimeout(() => {
            this.loading = false;
            if (res["status"] === "200") {
              this.toastr.success(res["message"], "Success!", {
                progressBar: true
              });
              this.router.navigateByUrl("master/payment-type");
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

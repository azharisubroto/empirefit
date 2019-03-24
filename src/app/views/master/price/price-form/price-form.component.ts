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
import { PriceService } from "src/app/shared/services/price.service";
import { MemberTypeService } from "src/app/shared/services/member-type.service";
import { PaymentTypeService } from "src/app/shared/services/payment-type.service";

@Component({
  selector: "app-basic-form",
  templateUrl: "./price-form.component.html",
  styleUrls: ["./price-form.component.scss"]
})
export class PriceFormComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  data;
  membertypes;
  packages;
  paymenttypes;
  priceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private paymentTypeService: PaymentTypeService,
    private priceService: PriceService,
    private memberTypeService: MemberTypeService
  ) {}

  ngOnInit() {
    this.priceForm = this.fb.group({
      payment_type_id: ["", Validators.required],
      member_type_id: ["", Validators.required],
      price: ["", Validators.required],
      recuring: [1, Validators.required],
      start_date: ["", Validators.required],
      end_date: ["", Validators.required]
    });

    this.memberTypeService.getMemberTypes().subscribe((data: any) => {
      this.membertypes = data["data"];
    });

    this.paymentTypeService.getPaymentTypes().subscribe((data: any) => {
      this.paymenttypes = data["data"];
    });

    this.priceService
      .showPrice(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.priceForm.setValue({
          payment_type_id: data["data"].payment_type_id,
          member_type_id: data["data"].member_type_id,
          price: data["data"].price,
          recuring: data["data"].recuring,
          start_date: data["data"].start_date,
          end_date: data["data"].end_date
        });
      });
  }

  submit() {
    if (this.priceForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.priceService
        .updatePrice(
          this.activatedRoute.snapshot.params["id"],
          this.priceForm.value
        )
        .subscribe((res: any) => {
          setTimeout(() => {
            this.loading = false;
            if (res["status"] === "200") {
              this.toastr.success(res["message"], "Success!", {
                progressBar: true
              });
              this.router.navigateByUrl("master/pricing-non-pt");
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

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
import { PersonaltrainerService } from "src/app/shared/services/personaltrainer.service";
import { MemberTypeService } from "src/app/shared/services/member-type.service";
import { PaymentTypeService } from "src/app/shared/services/payment-type.service";
import { PackageService } from "src/app/shared/services/package.service";

@Component({
  selector: "app-basic-form",
  templateUrl: "./price-pt-form.component.html",
  styleUrls: ["./price-pt-form.component.scss"]
})
export class PricePtFormComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  data;
  personaltrainers;
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
    private packageService: PackageService,
    private memberTypeService: MemberTypeService,
    private personalTrainerService: PersonaltrainerService
  ) {}

  ngOnInit() {
    this.priceForm = this.fb.group({
      personal_trainer_id: ["", Validators.required],
      payment_type_id: ["", Validators.required],
      member_type_id: ["", Validators.required],
      package_id: ["", Validators.required],
      price: ["", Validators.required],
      start_date: ["", Validators.required],
      end_date: ["", Validators.required]
    });

    this.personalTrainerService.getPersonalTrainers().subscribe((data: any) => {
      this.personaltrainers = data["data"];
    });

    this.packageService.getPackages().subscribe((data: any) => {
      this.packages = data["data"];
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
          personal_trainer_id: data["data"].personal_trainer_id,
          payment_type_id: data["data"].payment_type_id,
          member_type_id: data["data"].member_type_id,
          package_id: data["data"].package_id,
          price: data["data"].price,
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
              this.router.navigateByUrl("master/price");
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
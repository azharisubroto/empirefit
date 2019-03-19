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
import { NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-basic-form",
  templateUrl: "./price-pt-create.component.html",
  styleUrls: ["./price-pt-create.component.scss"]
})
export class PricePtCreateComponent implements OnInit {
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
    private personalTrainerService: PersonaltrainerService,
    private parserFormatter: NgbDateParserFormatter
  ) {}

  ngOnInit() {
    this.priceForm = this.fb.group({
      personal_trainer_id: ["", Validators.required],
      payment_type_id: [1, Validators.required],
      member_type_id: [1, Validators.required],
      package_id: [1, Validators.required],
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
  }

  submit() {
    let start_date = this.priceForm.controls["start_date"].value;
    let end_date = this.priceForm.controls["end_date"].value;
    let personal_trainer_id = this.priceForm.controls["personal_trainer_id"]
      .value;
    let payment_type_id = this.priceForm.controls["payment_type_id"].value;
    let member_type_id = this.priceForm.controls["member_type_id"].value;
    let package_id = this.priceForm.controls["package_id"].value;
    let price = this.priceForm.controls["price"].value;
    let formValues = this.priceForm.value;
    formValues["start_date"] = this.parserFormatter.format(start_date);
    formValues["end_date"] = this.parserFormatter.format(end_date);
    formValues["personal_trainer_id"] = personal_trainer_id;
    formValues["member_type_id"] = member_type_id;
    formValues["payment_type_id"] = payment_type_id;
    formValues["package_id"] = package_id;
    formValues["price"] = price;
    if (this.priceForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.priceService.createPrice(formValues).subscribe((res: any) => {
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

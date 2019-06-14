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
import { NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";
import { BranchService } from "src/app/shared/services/branch.service";

@Component({
  selector: "app-basic-form",
  templateUrl: "./price-create.component.html",
  styleUrls: ["./price-create.component.scss"]
})
export class PriceCreateComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  data;
  personaltrainers;
  membertypes;
  packages;
  paymenttypes;
  branch;
  priceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private paymentTypeService: PaymentTypeService,
    private priceService: PriceService,
    private memberTypeService: MemberTypeService,
    private branchService: BranchService,
    private parserFormatter: NgbDateParserFormatter
  ) { }

  ngOnInit() {
    this.priceForm = this.fb.group({
      payment_type_id: [1, Validators.required],
      member_type_id: [1, Validators.required],
      price: ["", Validators.required],
      recuring: [0, Validators.required],
      branch_id: [1, Validators.required],
      start_date: ["", Validators.required],
      end_date: ["", Validators.required]
    });

    this.branchService.getBranches().subscribe((data: any) => {
      this.branch = data["data"];
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
    let payment_type_id = this.priceForm.controls["payment_type_id"].value;
    let member_type_id = this.priceForm.controls["member_type_id"].value;
    let price = this.priceForm.controls["price"].value;
    let recuring = this.priceForm.controls["recuring"].value;
    let formValues = this.priceForm.value;
    formValues["start_date"] = this.parserFormatter.format(start_date);
    formValues["end_date"] = this.parserFormatter.format(end_date);
    formValues["member_type_id"] = member_type_id;
    formValues["payment_type_id"] = payment_type_id;
    formValues["price"] = price;
    formValues["branch_id"] = this.priceForm.controls["branch_id"].value;
    formValues["recuring"] = recuring;
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

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
import { BankService } from "src/app/shared/services/bank.service";

@Component({
  selector: "app-basic-form",
  templateUrl: "./bank-create.component.html",
  styleUrls: ["./bank-create.component.scss"]
})
export class BankCreateComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  banks;
  bankForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private bankService: BankService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.bankForm = this.fb.group({
      bank_name: ["", Validators.required],
      code: ["", Validators.required]
    });
  }

  submit() {
    if (this.bankForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.bankService.createBank(this.bankForm.value).subscribe((res: any) => {
        setTimeout(() => {
          this.loading = false;
          if (res["status"] === "200") {
            this.toastr.success(res["message"], "Success!", {
              progressBar: true
            });
            this.router.navigateByUrl("master/bank");
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

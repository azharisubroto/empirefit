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
  templateUrl: "./bank-form.component.html",
  styleUrls: ["./bank-form.component.scss"]
})
export class BankFormComponent implements OnInit {
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

    this.bankService
      .showBank(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.bankForm.setValue({
          bank_name: data["data"].bank_name,
          code: data["data"].code
        });
      });
  }

  submit() {
    if (this.bankForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.bankService
        .updateBank(
          this.activatedRoute.snapshot.params["id"],
          this.bankForm.value
        )
        .subscribe((res: any) => {
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

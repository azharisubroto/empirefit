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
import { EdcService } from "src/app/shared/services/edc.service";
import { BankService } from "src/app/shared/services/bank.service";
import { BranchService } from "src/app/shared/services/branch.service";

@Component({
  selector: "app-basic-form",
  templateUrl: "./edc-create.component.html",
  styleUrls: ["./edc-create.component.scss"]
})
export class EdcCreateComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  edcForm: FormGroup;
  branches;
  banks;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private edcService: EdcService,
    private bankService: BankService,
    private branchService: BranchService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.edcForm = this.fb.group({
      branch_id: ["1", Validators.required],
      bank_id: ["1", Validators.required],
      mid: ["", Validators.required],
      tid: ["", Validators.required],
    });

    this.bankService.getBanks().subscribe((data: any) => {
      this.banks = data["data"];
    });

    this.branchService.getBranches().subscribe((data: any) => {
      this.branches = data["data"];
    })
  }

  submit() {
    if (this.edcForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.edcService
        .createEdc(this.edcForm.value)
        .subscribe((res: any) => {
          setTimeout(() => {
            this.loading = false;
            if (res["status"] === "200") {
              this.toastr.success(res["message"], "Success!", {
                progressBar: true
              });
              this.router.navigateByUrl("master/edc");
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

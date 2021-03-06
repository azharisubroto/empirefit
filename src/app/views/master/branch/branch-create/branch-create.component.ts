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
import { BranchService } from "src/app/shared/services/branch.service";

@Component({
  selector: "app-basic-form",
  templateUrl: "./branch-create.component.html",
  styleUrls: ["./branch-create.component.scss"]
})
export class BranchCreateComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  branch_name;
  branchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private branchService: BranchService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.branchForm = this.fb.group({
      branch_name: ["", Validators.required],
      branch_code: ["", Validators.required],
      address: ["", Validators.required],
      email: ["", Validators.required],
      phone: ["", Validators.required],
    });
  }

  submit() {
    if (this.branchForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.branchService
        .createBranch(this.branchForm.value)
        .subscribe((res: any) => {
          setTimeout(() => {
            this.loading = false;
            if (res["status"] === "200") {
              this.toastr.success(res["message"], "Success!", {
                progressBar: true
              });
              this.router.navigateByUrl("master/branch");
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

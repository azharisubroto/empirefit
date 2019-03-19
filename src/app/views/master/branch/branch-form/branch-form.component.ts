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
  templateUrl: "./branch-form.component.html",
  styleUrls: ["./branch-form.component.scss"]
})
export class BranchFormComponent implements OnInit {
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
  ) {}

  ngOnInit() {
    this.branchForm = this.fb.group({
      branch_name: ["", Validators.required]
    });

    this.branchService
      .showBranch(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.branchForm.setValue({
          branch_name: data["data"].branch_name
        });
      });
  }

  submit() {
    if (this.branchForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.branchService
        .updateBranch(
          this.activatedRoute.snapshot.params["id"],
          this.branchForm.value
        )
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

import { Component, OnInit } from "@angular/core";
import { CustomValidators } from "ng2-validation";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { PersonaltrainerService } from "src/app/shared/services/personaltrainer.service";
import { StaffService } from "src/app/shared/services/staff.service";
import { MemberTypeService } from "src/app/shared/services/member-type.service";
import { BranchService } from "src/app/shared/services/branch.service";

@Component({
  selector: "app-basic-form",
  templateUrl: "./personal-trainer-create.component.html",
  styleUrls: ["./personal-trainer-create.component.scss"]
})
export class PersonalTrainerCreateComponent implements OnInit {
  loading: boolean;
  personaltrainers;
  data;
  id;
  name;
  staff_id;
  quota;
  remains;
  ptForm: FormGroup;
  staffs;
  member_types;
  branch;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private personalTrainerService: PersonaltrainerService,
    private staffService: StaffService,
    private branchService: BranchService,
    private memberTypeService: MemberTypeService
  ) { }

  ngOnInit() {
    this.ptForm = this.fb.group({
      id: [""],
      staff_id: [Validators.required],
      quota: [1, Validators.required],
      branch_id: [1, Validators.required],
      price: [0, Validators.required],
      session: [10, Validators.required]
    });

    this.branchService.getBranches().subscribe((data: any) => {
      this.branch = data["data"];
    });

    this.memberTypeService.memberTypePt().subscribe((data: any) => {
      this.member_types = data["data"];
    });

    this.staffService.getStaffPt().subscribe((data: any) => {
      this.staffs = data["data"];
    });
  }

  submit() {
    if (this.ptForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.personalTrainerService
        .createPersonalTrainer(this.ptForm.value)
        .subscribe((res: any) => {
          setTimeout(() => {
            this.loading = false;
            if (res["status"] === "200") {
              this.toastr.success(res["message"], "Success!", {
                progressBar: true
              });
              this.router.navigateByUrl("master/pricing-pt");
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

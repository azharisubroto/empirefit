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
import { DeviceService } from "src/app/shared/services/device.service";
import { BranchService } from "src/app/shared/services/branch.service";

@Component({
  selector: "app-basic-form",
  templateUrl: "./device-create.component.html",
  styleUrls: ["./device-create.component.css"]
})
export class DeviceCreateComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  partner_name;
  branches: any = [];
  deviceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private deviceService: DeviceService,
    private BranchService: BranchService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.deviceForm = this.fb.group({
      sn: ["", Validators.required],
      device_name: ["", Validators.required],
      vc: ["", Validators.required],
      ac: ["", Validators.required],
      vkey: ["", Validators.required],
      branch_id: ["1", Validators.required],
    });

    this.BranchService.getBranches().subscribe((data: any) => {
      this.branches = data["data"];
    })
  }

  submit() {
    if (this.deviceForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.deviceService
        .createDevice(this.deviceForm.value)
        .subscribe((res: any) => {
          setTimeout(() => {
            this.loading = false;
            if (res["status"] === "200") {
              this.toastr.success(res["message"], "Success!", {
                progressBar: true
              });
              this.router.navigateByUrl("master/device");
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

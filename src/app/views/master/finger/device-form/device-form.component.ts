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
  templateUrl: "./device-form.component.html",
  styleUrls: ["./device-form.component.css"]
})
export class DeviceFormComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  branches: any = [];
  partner_name;
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

    this.deviceService
      .showDevice(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.deviceForm.setValue({
          sn: data["data"].sn,
          device_name: data["data"].device_name,
          vc: data["data"].vc,
          ac: data["data"].ac,
          vkey: data["data"].vkey,
          branch_id: data["data"].branch_id
        });
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
        .updateDevice(
          this.activatedRoute.snapshot.params["id"],
          this.deviceForm.value
        )
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

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

@Component({
  selector: "app-basic-form",
  templateUrl: "./device-form.component.html",
  styleUrls: ["./device-form.component.css"]
})
export class DeviceFormComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  partner_name;
  deviceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private deviceService: DeviceService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.deviceForm = this.fb.group({
      sn: ["", Validators.required],
      device_name: ["", Validators.required],
      vc: ["", Validators.required],
      ac: ["", Validators.required],
      vkey: ["", Validators.required]
    });

    this.deviceService
      .showDevice(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.deviceForm.setValue({
          sn: data["data"]["0"].sn,
          device_name: data["data"]["0"].device_name,
          vc: data["data"]["0"].vc,
          ac: data["data"]["0"].ac,
          vkey: data["data"]["0"].vkey
        });
      });
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

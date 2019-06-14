import { Component, OnInit } from "@angular/core";
import { SharedAnimations } from "src/app/shared/animations/shared-animations";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../../shared/services/auth.service";
import { BranchService } from "../../../shared/services/branch.service";
import { DeviceService } from "../../../shared/services/device.service";
import {
  Router,
  RouteConfigLoadStart,
  ResolveStart,
  RouteConfigLoadEnd,
  ResolveEnd
} from "@angular/router";
import * as $ from 'jquery';
import { LocalStoreService } from "src/app/shared/services/local-store.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
  animations: [SharedAnimations]
})
export class SigninComponent implements OnInit {
  loading: boolean;
  loadingText: string;
  branches: any = [];
  devices: any = [];
  redirect;
  signinForm: FormGroup;
  constructor(
    private store: LocalStoreService,
    private fb: FormBuilder,
    private auth: AuthService,
    private branchService: BranchService,
    private deviceService: DeviceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      vc: [Validators.required]
    });

    this.router.events.subscribe(event => {
      if (
        event instanceof RouteConfigLoadStart ||
        event instanceof ResolveStart
      ) {
        this.loadingText = "Loading Dashboard Module...";

        this.loading = true;
      }
      if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
        this.loading = false;
      }
    });

    this.branchService.getBranches().subscribe((data: any) => {
      this.branches = data["data"];
    });

    this.deviceService.getByBranch(1).subscribe((data: any) => {
      this.devices = data["data"];

      this.signinForm.patchValue({
        vc: data['data']["0"].vc
      })
    });
  }

  getDevice() {
    console.log('click')
    let $branchid = $("#branch").val();
    this.deviceService.getByBranch($branchid).subscribe((data: any) => {
      this.devices = data["data"];

      setTimeout(() => {
        $("#device_list").html('');
        $.each(this.devices, function (i, list) {
          $("#device_list").append(
            "<option value=" + list.vc + ">" + list.device_name + "</option>"
          )
        })
      }, 200);
    });
  }

  signin() {
    // return console.log(this.signinForm.value);
    if (this.signinForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.loadingText = "Signing in...";
      this.auth.signin(this.signinForm.value).subscribe((data: any) => {
        if (data.status == "200") {
          this.store.setItem("access_token", data.access_token);
          this.redirect = "";
          window.location = this.redirect;
        } else {
          this.store.clear();
          this.loading = false;
        }
        this.loading = false;
      });
    }
  }
}

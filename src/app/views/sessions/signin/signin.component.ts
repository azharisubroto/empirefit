import { Component, OnInit } from "@angular/core";
import { SharedAnimations } from "src/app/shared/animations/shared-animations";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../../shared/services/auth.service";
import {
  Router,
  RouteConfigLoadStart,
  ResolveStart,
  RouteConfigLoadEnd,
  ResolveEnd
} from "@angular/router";
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
  redirect;
  signinForm: FormGroup;
  constructor(
    private store: LocalStoreService,
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
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

    this.signinForm = this.fb.group({
      email: ["test@example.com", Validators.required],
      password: ["1234", Validators.required]
    });
  }

  signin() {
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
      });
    }
  }
}

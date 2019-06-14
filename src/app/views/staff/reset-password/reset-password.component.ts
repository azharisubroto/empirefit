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
import { UserService } from "src/app/shared/services/user.service";
import { LocalStoreService } from "src/app/shared/services/local-store.service";

@Component({
  selector: "app-reset-password-form",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.scss"]
})
export class ResetPasswordComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  branch_name;
  resetForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private userService: UserService,
    private store: LocalStoreService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.resetForm = this.fb.group({
      old_password: ["*****", Validators.required],
      new_password: ["*****"],
      password_confirmation: ["*****", Validators.required]
    });
  }

  submit() {
    if (this.resetForm.invalid) {
      this.loading = false;
      return alert('Please completed form');
    } else {
      this.loading = true;
      this.userService
        .resetPassword(
          this.resetForm.value
        )
        .toPromise()
        .then(res => {
          this.loading = false;
          if (res['status'] == '200') {
            this.toastr.success(res["message"], "Success!", {
              progressBar: true
            });
            this.store.clear();
            this.router.navigateByUrl("/sessions/signin");
          } else {
            this.toastr.error(res["message"], "Error!", {
              progressBar: true
            });
          }
        })
        .catch(res => {
          this.loading = false;
          this.toastr.error(res["statusText"], "Error!", {
            progressBar: true
          });
        })
    }
  }
}

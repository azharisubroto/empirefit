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
import { PersonaltrainerService } from "src/app/shared/services/personaltrainer.service";
import { UserService } from "src/app/shared/services/user.service";

@Component({
  selector: "app-basic-form",
  templateUrl: "./personal-trainer-form.component.html",
  styleUrls: ["./personal-trainer-form.component.scss"]
})
export class PersonalTrainerFormComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  data;
  id;
  name;
  user_id;
  quota;
  remains;
  ptForm: FormGroup;
  users;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private personalTrainerService: PersonaltrainerService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.ptForm = this.fb.group({
      id: [""],
      user_id: [Validators.required],
      quota: ["", Validators.required],
      remains: [0, Validators.required]
    });

    this.userService.getUsers().subscribe((data: any) => {
      this.users = data["data"];
    });

    this.personalTrainerService
      .showPersonalTrainer(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.ptForm.setValue({
          id: data["data"].id,
          user_id: data["data"].user_id,
          quota: data["data"].quota,
          remains: data["data"].remains
        });
      });
  }

  submit() {
    if (this.ptForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.personalTrainerService
        .updatePersonalTrainer(
          this.activatedRoute.snapshot.params["id"],
          this.ptForm.value
        )
        .subscribe((res: any) => {
          setTimeout(() => {
            this.loading = false;
            if (res["status"] === "200") {
              this.toastr.success(res["message"], "Success!", {
                progressBar: true
              });
              this.router.navigateByUrl("master/personal-trainer");
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

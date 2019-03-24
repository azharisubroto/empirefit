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
import { MemberTypeService } from "src/app/shared/services/member-type.service";

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
  member_types;
  ptForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private personalTrainerService: PersonaltrainerService,
    private memberTypeService: MemberTypeService
  ) {}

  ngOnInit() {
    this.ptForm = this.fb.group({
      id: [""],
      name: [],
      quota: [1, Validators.required],
      remains: [0, Validators.required],
      price: [0, Validators.required],
      session: [10, Validators.required]
    });

    this.personalTrainerService
      .showPersonalTrainer(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        console.log(data["data"]);
        this.ptForm.setValue({
          id: data["data"].id,
          name: data["data"].name,
          quota: data["data"].quota,
          remains: data["data"].remains,
          price: data["data"].price,
          session: data["data"].session
        });
      });

    this.memberTypeService.memberTypePt().subscribe((data: any) => {
      this.member_types = data["data"];
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

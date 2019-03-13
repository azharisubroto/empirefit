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
import { InstructureService } from "src/app/shared/services/instructure.service";
import { UserService } from "src/app/shared/services/user.service";

@Component({
  selector: "app-basic-form",
  templateUrl: "./instructure-form.component.html",
  styleUrls: ["./instructure-form.component.scss"]
})
export class InstructureFormComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  data;
  id;
  user_id;
  instructureForm: FormGroup;
  users;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private instructureService: InstructureService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.instructureForm = this.fb.group({
      id: [""],
      user_id: [Validators.required]
    });

    this.userService.getUsers().subscribe((data: any) => {
      this.users = data["data"];
    });

    this.instructureService
      .showInstructure(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.instructureForm.setValue({
          id: data["data"].id,
          user_id: data["data"].user_id
        });
      });
  }

  submit() {
    if (this.instructureForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.instructureService
        .updateInstructure(
          this.activatedRoute.snapshot.params["id"],
          this.instructureForm.value
        )
        .subscribe((res: any) => {
          setTimeout(() => {
            this.loading = false;
            if (res["status"] === "200") {
              this.toastr.success(res["message"], "Success!", {
                progressBar: true
              });
              this.router.navigateByUrl("master/instructure");
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

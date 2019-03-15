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
import { MemberTypeService } from "src/app/shared/services/member-type.service";

@Component({
  selector: "app-basic-form",
  templateUrl: "./member-type-form.component.html",
  styleUrls: ["./member-type-form.component.scss"]
})
export class MemberTypeFormComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  member_type_name;
  memberTypeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private memberTypeService: MemberTypeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.memberTypeForm = this.fb.group({
      member_type_name: ["", Validators.required]
    });

    this.memberTypeService
      .showMemberType(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.memberTypeForm.setValue({
          member_type_name: data["data"].member_type_name
        });
      });
  }

  submit() {
    if (this.memberTypeForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.loading = true;
      this.memberTypeService
        .updateMemberType(
          this.activatedRoute.snapshot.params["id"],
          this.memberTypeForm.value
        )
        .subscribe((res: any) => {
          setTimeout(() => {
            this.loading = false;
            if (res["status"] === "200") {
              this.toastr.success(res["message"], "Success!", {
                progressBar: true
              });
              this.router.navigateByUrl("master/member-type");
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

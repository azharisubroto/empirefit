import { Component, OnInit } from '@angular/core';
import { CustomValidators } from 'ng2-validation';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MemberService } from "src/app/shared/services/member.service";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-basic-form',
  templateUrl: './member-attendance.component.html',
  styleUrls: ['./member-attendance.component.scss']
})
export class MemberAttendanceComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  radioGroup: FormGroup;
  public member: any;
  expirydate: any;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private memberService: MemberService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.member = {make: ""};
    this.expirydate = {make: ""};
    this.buildFormBasic();
    this.radioGroup = this.fb.group({
      radio: []
    });

    this.memberService.getSingleMember( this.activatedRoute.snapshot.params["id"] ).subscribe((data: any) => {
      this.member = data["data"];
      var date = new Date(data["data"]["expairy_date"]);
      var list = date.toUTCString().split( " ")
      //results.push(list[1]+" "+list[2]);
      this.expirydate = list[1] + " " + list[2] + " " + list[3];
      console.log( this.member ); 
    });
  }

  buildFormBasic() {
    this.formBasic = this.fb.group({
      experience: []
    });
  }

  submit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.toastr.success('Profile updated.', 'Success!', { progressBar: true });
    }, 3000);
  }

}

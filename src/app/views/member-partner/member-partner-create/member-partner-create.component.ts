import { Component, OnInit } from "@angular/core";
import { CustomValidators } from "ng2-validation";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { UserService } from "src/app/shared/services/user.service";
import { MemberPartnerService } from "src/app/shared/services/memberpartner.service";
import { ClassesService } from "src/app/shared/services/classes.service";
import { Router } from "@angular/router";
import * as $ from "jquery";
import { timeout } from "rxjs/operators";

@Component({
  selector: 'app-member-partner-create',
  templateUrl: './member-partner-create.component.html',
  styleUrls: ['./member-partner-create.component.scss']
})
export class MemberPartnerCreateComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  user:any[];
  userid:any;
  data;
  name;
  email;
  password;
  password_confirmation;
  branch_id;
  role;
  roles: any[];
  branches: any[];
  userForm: FormGroup;
  staffs;
  partners: any[];

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private userService: UserService,
    private router: Router,
    private MemberPartnerService: MemberPartnerService,
    private ClassesService: ClassesService,
  ) { 
    
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      phone: ["", Validators.required],
      reference: ["", Validators.required],
      email_date_time: ["", Validators.required],
      company: ["", Validators.required],
      class: ["", Validators.required],
      class_date: ["", Validators.required],
      branch: ["", Validators.required],
      status: ["", Validators.required],
      created_by: ["", Validators.required],
    });

    this.MemberPartnerService.getDropinCompanies().subscribe((data: any)=>{
      this.partners = data['data'];
      console.log(this.partners);
    });

    this.userService.getSingleUser().subscribe((data: any) => {
      this.user = data["data"];
      var users = data["data"];
      this.userid = users['id'];
    });
  }

  changeDate(event: any) {
    var mod = this;
    var year = event['year'];
    var month = event['month'];
    var day = event['day'];
    var tosend = year + '-' + this.pad(month) + '-' + this.pad(day);
    console.log(tosend); 
    $('.classes-list').html('Loading...');

    this.userForm.patchValue({
      class_date: tosend
    });

    this.ClassesService.classesByDay(tosend).subscribe((data: any)=>{
      console.log(data['data']);
      var res = data['data'];
      var items: any = [];
      $.each(res, function (i, item) {
        // console.log(item);
        var _cancelbtn = '<label class="d-block mb-3" for="class-'+item.id+'"><input id="class-'+item.id+'" type="radio" value="'+item.id+'" name="class_pick"> '+ item.time +' '+item.exercise +'</label>';
        items.push(_cancelbtn);
      });
      $('.classes-list').html(items);
      setTimeout(() => {
          $('[name="class_pick"]').on('change', function(e) {
            //console.log(e.type);
            var rad = $(this).val();
            console.log(rad);
            mod.userForm.patchValue({
              class: rad
            });
          });
      }, 500);
    });
  }

  pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
  }

  submit() {
    this.userForm.patchValue({
      branch: 1,
      status: 0,
      created_by: this.userid,
    });
    $('#saving').html('Saving...');
    if (this.userForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.MemberPartnerService.createMemberPartner(this.userForm.value).subscribe((res: any) => {
        setTimeout(() => {
          if (res["status"] === "200") {
            this.toastr.success(res["message"], "Success!", {
              progressBar: true
            });
            this.router.navigateByUrl("/member-partner");
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

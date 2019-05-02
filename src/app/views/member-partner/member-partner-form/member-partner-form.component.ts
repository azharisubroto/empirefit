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
import { Router, ActivatedRoute } from "@angular/router";
import * as $ from "jquery";
import { timeout } from "rxjs/operators";


@Component({
  selector: 'app-member-partner-form',
  templateUrl: './member-partner-form.component.html',
  styleUrls: ['./member-partner-form.component.scss']
})
export class MemberPartnerFormComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  user: any[];
  userid: any;
  data;
  name;
  email;
  password;
  password_confirmation;
  branch_id;
  role;
  roles: any[];
  branches: any[];
  partnerdata;
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
    private ActivatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    var mod = this;
    this.partnerdata = { make: "" };
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

    this.MemberPartnerService.getSingleMemberPartner(this.ActivatedRoute.snapshot.params["id"]).subscribe((data: any) => {
      var res = data['data'];
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      var newtoday = yyyy + '-' + mm + '-' + dd;

      this.partnerdata = data['data'];
      var classdate = newtoday;
      var splitdate = classdate.split('-');
      var year = splitdate[0],
        month = splitdate[1],
        day = splitdate[2];

      console.log(splitdate[0]);
      console.log(res);
      this.userForm.setValue({
        name: res.name,
        email: res.email,
        phone: res.phone,
        reference: res.booking_referance,
        email_date_time: res.email_date_time,
        company: res.company_id,
        class: res.class_id,
        class_date: {
          day: parseInt(day),
          month: parseInt(month),
          year: parseInt(year)
        },
        branch: 1,
        status: res.status,
        created_by: res.created_by
      });

      $(".class_datedate").val(classdate);

      this.ClassesService.classesByDay(classdate).subscribe((data: any) => {
        //console.log(data['data']);
        var res = data['data'];
        var items: any = [];
        $.each(res, function (i, item) {
          // //console.log(item);
          var _cancelbtn = '<label class="d-block mb-3" for="class-' + item.id + '"><input id="class-' + item.id + '" type="radio" value="' + item.id + '" name="class_pick"> ' + item.time + ' ' + item.exercise + '</label>';
          items.push(_cancelbtn);
        });
        $('.classes-list').html(items);
        setTimeout(() => {
          $('[name="class_pick"]').on('change', function (e) {
            ////console.log(e.type);
            var rad = $(this).val();
            //console.log(rad);
            mod.userForm.patchValue({
              class: rad
            });
          });
        }, 500);
      });
    });

    // var newdatedate = newdate.split('-');

    this.MemberPartnerService.getDropinCompanies().subscribe((data: any) => {
      this.partners = data['data'];
      //console.log(this.partners);
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
    //console.log(tosend); 
    $('.classes-list').html('Loading...');

    this.userForm.patchValue({
      class_date: tosend
    });

    this.ClassesService.classesByDay(tosend).subscribe((data: any) => {
      //console.log(data['data']);
      var res = data['data'];
      var items: any = [];
      $.each(res, function (i, item) {
        // //console.log(item);
        var _cancelbtn = '<label class="d-block mb-3" for="class-' + item.id + '"><input id="class-' + item.id + '" type="radio" value="' + item.id + '" name="class_pick"> ' + item.time + ' ' + item.exercise + '</label>';
        items.push(_cancelbtn);
      });
      $('.classes-list').html(items);
      setTimeout(() => {
        $('[name="class_pick"]').on('change', function (e) {
          ////console.log(e.type);
          var rad = $(this).val();
          //console.log(rad);
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
    $('#saving').html('Saving...');
    if (this.userForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.MemberPartnerService.updateMemberPartner(this.ActivatedRoute.snapshot.params["id"], this.userForm.value).subscribe((res: any) => {
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

import { Component, OnInit } from '@angular/core';
import { CustomValidators } from 'ng2-validation';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { MemberService } from "src/app/shared/services/member.service";
import { UserService } from "src/app/shared/services/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  user: any;
  firstTime: any;
  userForm: FormGroup;
  password_att;
  password_class;
  public todayDate: any;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private memberService: MemberService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private UserService: UserService
  ) { }

  ngOnInit() {
    this.member = {make: ""};
    this.expirydate = {make: ""};
    this.user = {make:""};
    this.firstTime = {make:""};
    this.buildFormBasic();
    this.radioGroup = this.fb.group({
      radio: []
    });

    this.userForm = this.fb.group({
      password: ["", Validators.required],
    });

    this.memberService.getSingleMember( this.activatedRoute.snapshot.params["id"] ).subscribe((data: any) => {
      this.member = data["data"];
      var date = new Date(data["data"]["expairy_date"]);
      var list = date.toUTCString().split( " ")
      //results.push(list[1]+" "+list[2]);
      this.expirydate = list[1] + " " + list[2] + " " + list[3];
      //console.log( this.member ); 
      this.todayDate = this.getTanggal();
      console.log(this.member);
    });

    this.UserService.getSingleUser().subscribe((data: any) => {
      this.user = data["data"];
      console.log( this.user );
    });
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
    .result.then((result) => {
      console.log(result);
    });
  }

  attendanceCheck() {
    // password true
    // if( this.checkPass() == true ) {
      
    // }

    this.UserService.userCheckPassword( this.user.staff_id, this.userForm.value ).subscribe((data: any) => {
        var pass = data;
        this.loading = true;
        if( pass != null && pass['status'] == 200 ) {
          var today = new Date();
          var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
          var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
          var dateTime = time;

          this.firstTime = dateTime;
          
          $('.first_time').text(dateTime);
          this.loading = false;
          
          $('.modal-header .close').trigger('click');
        } else {
          alert('Your password is incorrect');
          this.loading = false;
        }
    });
  }

  classCheck() {
    this.UserService.userCheckPassword( this.user.staff_id, this.userForm.value ).subscribe((data: any) => {
      var pass = data;
      this.loading = true;
      if( pass != null && pass['status'] == 200 ) {
        $('.jadwal').find('.notyet:eq(0)').removeClass('notyet').find('input').prop('checked', true);
        this.loading = false;
        
        $('.modal-header .close').trigger('click');
      } else {
        alert('Your password is incorrect');
        this.loading = false;
      }
    });
  }

  getTanggal(){
    var d = new Date();

    var month = d.getMonth()+1;
    var day = d.getDate();

    var output = d.getFullYear() + '/' +
        (month<10 ? '0' : '') + month + '/' +
        (day<10 ? '0' : '') + day;
    return output;
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

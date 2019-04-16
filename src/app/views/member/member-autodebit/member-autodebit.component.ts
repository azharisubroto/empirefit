import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { CustomValidators } from "ng2-validation";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { MemberService } from "src/app/shared/services/member.service";
import { UserService } from "src/app/shared/services/user.service";
import { AttendanceService } from "src/app/shared/services/attendance.service";
import { ScheduleService } from "src/app/shared/services/schedule.service";
import { FingerService } from "src/app/shared/services/finger.service";
import { PersonaltrainerService } from "src/app/shared/services/personaltrainer.service";
import { ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DomSanitizer } from "@angular/platform-browser";
import { ClassesService } from "src/app/shared/services/classes.service";
import { interval } from "rxjs/observable/interval";
import * as $ from "jquery";
import "datatables.net";
import "datatables.net-bs4";
//import { setTimeout } from "timers";
import { timeout } from "rxjs/operators";

@Component({
  selector: 'app-member-autodebit',
  templateUrl: './member-autodebit.component.html',
  styleUrls: ['./member-autodebit.component.scss']
})
export class MemberAutodebitComponent implements OnInit {
  user: any;
  member: any;
  recurings: any;
  creditcards: any;
  trace: any;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private memberService: MemberService,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private UserService: UserService,
    private attendanceService: AttendanceService,
    private scheduleService: ScheduleService,
    private fingerService: FingerService,
    private ClassesService: ClassesService,
    private personalTrainerService: PersonaltrainerService,
    private sanitizer: DomSanitizer,
    private chRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.member = { make: "" };
    this.user = { make: "" };
    this.recurings = { make: "" };
    this.creditcards = { make: "" };
    this.trace = { make: "" };
    // get member detail
    this.memberService.getSingleMember(this.activatedRoute.snapshot.params["id"]).subscribe((data: any) => {
      this.member = data["data"];
      this.recurings = data["data"]["recurings"];
      this.creditcards = data["data"]["credit_cards"];
      this.trace = data["data"]["trace_number"];
      console.log(this.member);
    });
    // Get single User
    this.UserService.getSingleUser().subscribe((data: any) => {
      this.user = data["data"];
      //console.log(this.user);
    });
  }

}

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
import { BankService } from "src/app/shared/services/bank.service";
import { PaymentTypeService } from "src/app/shared/services/payment-type.service";
import { AttendanceService } from "src/app/shared/services/attendance.service";
import { ScheduleService } from "src/app/shared/services/schedule.service";
import { FingerService } from "src/app/shared/services/finger.service";
import { PersonaltrainerService } from "src/app/shared/services/personaltrainer.service";
import { ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DomSanitizer } from "@angular/platform-browser";
import { ClassesService } from "src/app/shared/services/classes.service";
import { Router } from "@angular/router";
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
  receiptForm: FormGroup;
  userForm: FormGroup;
  auto_debits: any;
  creditcards: any;
  payments;
  banks;
  loading: boolean;
  trace: any;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private memberService: MemberService,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private UserService: UserService,
    private bankService: BankService,
    private paymentService: PaymentTypeService,
    private router: Router,
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
    this.auto_debits = { make: "" };
    this.creditcards = { make: "" };
    this.trace = { make: "" };

    this.receiptForm = this.fb.group({
      payment_id: ["1", Validators.required],
      card_number: [],
      price: ["", Validators.required],
      trace_number: [],
      bank_id: [],
    });

    this.userForm = this.fb.group({
      user_id: ["", Validators.required],
      password: ["", Validators.required]
    })

    // get member detail
    this.memberService.getSingleMember(this.activatedRoute.snapshot.params["id"]).subscribe((data: any) => {
      this.member = data["data"];
      this.auto_debits = data["data"]["auto_debits"];
      this.creditcards = data["data"]["credit_cards"];
      this.trace = data["data"]["trace_number"];
      console.log(this.member);

      this.receiptForm.setValue({
        payment_id: "1",
        card_number: "",
        price: this.auto_debits.unpaid,
        trace_number: "",
        bank_id: "0",
      });

    });
    // Get single User
    this.UserService.getSingleUser().subscribe((data: any) => {
      this.user = data["data"];
      //console.log(this.user);
    });

    this.paymentService.getPaymentTypes().subscribe((data: any) => {
      this.payments = data["data"];
    });

    this.bankService.getBanks().subscribe((data: any) => {
      this.banks = data["data"];
    });
  }

  submit() {
    if (this.receiptForm.controls["payment_id"].value == 1 || this.receiptForm.controls["payment_id"].value == 2) {
      if (this.receiptForm.controls["card_number"].value == "" || this.receiptForm.controls["trace_number"].value == "" || this.receiptForm.controls["bank_id"].value == 0) {
        alert('Please completed receipt record');
      } else {
        this.loading = true;
        this.memberService
          .updatePayment(this.activatedRoute.snapshot.params["id"], this.receiptForm.value)
          .subscribe((res: any) => {
            if (res["status"] == "200") {
              setTimeout(() => {
                this.loading = false;

                this.toastr.success(res["message"], "Success!", {
                  progressBar: true
                });

                location.reload()
              }, 1000);
            }
          });
      }
    } else {
      this.loading = true;
      this.memberService
        .updatePayment(this.activatedRoute.snapshot.params["id"], this.receiptForm.value)
        .subscribe((res: any) => {
          if (res["status"] == "200") {
            setTimeout(() => {
              this.loading = false;

              this.toastr.success(res["message"], "Success!", {
                progressBar: true
              });

              this.router.navigateByUrl("dashboard/member/detail/" + this.activatedRoute.snapshot.params['id']);
            }, 1000);
          }
        });
    }
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(result => {
        //console.log(result);
      });
  }

  deactivatedCc() {
    this.UserService.userCheckPassword(
      this.user.staff_id,
      this.userForm.value
    ).subscribe((data: any) => {
      var pass = data;
      let formValue = this.userForm.value;
      this.loading = true;
      if (pass != null && pass["status"] == 200) {
        this.memberService
          .deactivateCC(this.activatedRoute.snapshot.params["id"], formValue)
          .subscribe((data: any) => {
            if (data["status"] == "200") {
              this.loading = false;

              this.toastr.success(data["message"], "Success!", {
                progressBar: true
              });

              $(".modal-header .close").trigger("click");

              setTimeout(() => {
                this.router.navigateByUrl("dashboard/member/detail/" + data["member_id"]);
              }, 1000);
            } else {

            }
          });
      } else {
        alert("Your password is incorrect");
        this.loading = false;
      }
    });
  }

}

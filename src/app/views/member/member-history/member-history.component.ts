import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ProductService } from "src/app/shared/services/product.service";
import { ClassRegisterService } from "src/app/shared/services/classRegisterService.service";
import { BranchService } from "src/app/shared/services/branch.service";
import { MemberService } from "src/app/shared/services/member.service";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router, ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ScheduleService } from "src/app/shared/services/schedule.service";
import * as $ from "jquery";
// import "datatables.net";
// import "datatables.net-bs4";
import 'datatables.net-buttons';
import 'datatables.net-buttons-bs4';
import 'datatables.net-responsive';
import 'datatables.net-buttons/js/buttons.html5.js';

@Component({
  selector: "app-filter-table",
  templateUrl: "./member-history.component.html",
  styleUrls: ["./member-history.component.scss"]
})
export class MemberHistoryComponent implements OnInit {
  searchControl: FormControl = new FormControl();
  products;
  days;
  classregistrations;
  branches;
  searchForm: FormGroup;
  schedules;
  membername;
  table;
  member;
  transactions;

  constructor(
    private fb: FormBuilder,
    private classRegistrationService: ClassRegisterService,
    private branchService: BranchService,
    private scheduleService: ScheduleService,
    private memberService: MemberService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private chRef: ChangeDetectorRef,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.memberService.getSingleMember(this.activatedRoute.snapshot.params["id"]).subscribe((data: any) => {
      this.member = data["data"];
      this.membername = this.member.name;
      this.transactions = this.member.transactions;
      this.chRef.detectChanges();
      setTimeout(() => {
        let filename = 'EFC-HIS-' + this.membername;
        this.table = $("#mytable").DataTable({
          dom: 'Bfrtip',
          responsive:true,
          buttons: {
            dom: {
              button: {
                className: 'btn '
              }
            },
            buttons: [
              { extend: 'excel', className: 'btn-warning', title: filename },
              { extend: 'csv', className: 'btn-warning', title: filename }
            ]
          }
        });
      }, 200);
    });
  }

  back() {
    this.router.navigateByUrl(
      "dashboard/member/detail/" + this.activatedRoute.snapshot.params["id"]
    );
  }
}

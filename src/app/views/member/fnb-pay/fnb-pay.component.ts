import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { FnbService } from "src/app/shared/services/fnb.service";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import { UserService } from "src/app/shared/services/user.service";
import { MemberService } from "src/app/shared/services/member.service";
import { EdcService } from "src/app/shared/services/edc.service";
import * as $ from "jquery";
// import "datatables.net";
// import "datatables.net-bs4";
import 'datatables.net-buttons';
import 'datatables.net-buttons-bs4';
import 'datatables.net-buttons/js/buttons.html5.js';
import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';
import 'xlsx';
import 'jspdf-autotable';
import 'tableexport';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-fnb-pay',
  templateUrl: './fnb-pay.component.html',
  styleUrls: ['./fnb-pay.component.scss']
})
export class FnbPayComponent implements OnInit {

  fnball: any = [];
  fnbForm: FormGroup;
  table;
  member;
  confirmResut;
  loading: boolean;

  constructor(
    private fnbService: FnbService,
    private router: Router,
    private chRef: ChangeDetectorRef,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private UserService: UserService,
    private memberService: MemberService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private EdcService: EdcService,
  ) { }

  ngOnInit() {
    var mod = this;
    this.member = { make: "" };

    this.memberService.getSingleMember(this.activatedRoute.snapshot.params["id"]).subscribe((data: any) => {
      this.member = data["data"];
      this.fnball = data["data"].fnb;

      setTimeout(() => {
        $("#idr").val(data["data"].total_fnb);

        if (data["data"].total_fnb === 0) {
          $(".pay-now").attr('disabled', 'disabled');
        } else {
          $(".pay-now").removeAttr('disabled');
        }
        this.chRef.detectChanges();
        this.table = $("#mytable").DataTable({
          dom: 'Bfrtip',
          buttons: {
            dom: {
              button: {
                className: 'btn '
              }
            },
            buttons: [
              { extend: 'excel', className: 'btn-warning' },
              { extend: 'csv', className: 'btn-warning' }
            ]
          },
        });
      }, 200);
    });

    this.fnbForm = this.fb.group({
      type: ["3", Validators.required],
      trace_number: [""]
    });

  }

  cancel() {
    this.router.navigateByUrl(
      "dashboard/member/detail/" + this.activatedRoute.snapshot.params["id"]
    );
  }

  submit() {
    // return console.log(this.fnbForm.value)
    if (this.fnbForm.invalid) {
      this.loading = false;
      alert('Please choice payment type')
    } else {
      this.loading = true;
      this.fnbService.update(this.activatedRoute.snapshot.params["id"], this.fnbForm.value).subscribe((res: any) => {
        setTimeout(() => {
          this.loading = false;
          if (res["status"] === "200") {
            this.toastr.success(res["message"], "Success!", {
              progressBar: true
            });
            this.router.navigateByUrl("dashboard/member/detail/" + this.activatedRoute.snapshot.params["id"]);
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

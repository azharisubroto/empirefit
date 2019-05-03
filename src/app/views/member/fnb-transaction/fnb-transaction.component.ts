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
  selector: 'app-fnb-transaction',
  templateUrl: './fnb-transaction.component.html',
  styleUrls: ['./fnb-transaction.component.scss']
})
export class FnbTransactionComponent implements OnInit {

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
      item: ["", Validators.required],
      idr: ["0", Validators.required],
      member_id: [this.activatedRoute.snapshot.params['id'], Validators.required]
    });

  }

  confirm(content, id) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title", centered: true })
      .result.then(
        result => {
          this.fnbService.delete(id).subscribe((data: any) => {
            if (data["status"] == "200") {
              this.toastr.success(data["message"], "Success!", {
                progressBar: true
              });
              this.confirmResut = `Closed with: ${result}`;
              location.reload();
            }
          });
        },
        reason => {
          this.confirmResut = `Dismissed with: ${reason}`;
        }
      );
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
      alert('Please insert item and price')
    } else {
      this.loading = true;
      this.fnbService.payLater(this.fnbForm.value).subscribe((res: any) => {
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

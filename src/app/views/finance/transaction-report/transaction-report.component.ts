import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { FinanceService } from "src/app/shared/services/finance.service";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import { UserService } from "src/app/shared/services/user.service";
import { TransactionService } from "src/app/shared/services/transaction.service";
import { EdcService } from "src/app/shared/services/edc.service";
import { BranchService } from "src/app/shared/services/branch.service";
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
import { Utils } from "../../../shared/utils";



@Component({
  selector: "app-filter-table",
  templateUrl: "./transaction-report.component.html",
  styleUrls: ["./transaction-report.component.scss"]
})
export class TransactionReportComponent implements OnInit {
  searchControl: FormControl = new FormControl();
  transactions: any = [];
  user: any;
  filteredProducts;
  userForm: FormGroup;
  table;
  thead;
  tbody;
  tanggal;
  branches;
  total_revenue;
  total_transaction;
  printTable;


  constructor(
    private FinanceService: FinanceService,
    private branchService: BranchService,
    private TransactionService: TransactionService,
    private router: Router,
    private chRef: ChangeDetectorRef,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private UserService: UserService,
    private fb: FormBuilder,
    private EdcService: EdcService,
  ) { }


  ngOnInit() {
    var mod = this;
    this.tanggal = this.getTanggal();

    this.userForm = this.fb.group({
      branch_id: ["ALL", Validators.required],
      first_date: ["", Validators.required],
      second_date: ["", Validators.required],
      payment_type: ["ALL", Validators.required]
    });

    this.branchService.getBranches().subscribe((data: any) => {
      this.branches = data["data"];
    });

    this.TransactionService.getTransactions().subscribe((data: any[]) => {
      var res = data['data'];
      var $curdate = this.getTanggal()
      var $filename = 'EFC-TRANSACTION' + "-" + $curdate;

      this.total_revenue = data["total_revenue"];
      this.total_transaction = data["total_transaction"];
      this.transactions = res;
      setTimeout(() => {
        this.printTable = $("#example-table").DataTable();
        if( Utils.isMobile() ) {
          var autowidth = true;
          var scrollx = true;
        } else {
          var autowidth = false;
          var scrollx = false;
        }
        this.table = $("#mytable").DataTable({
          // scrollX: true,
          autoWidth: autowidth,
          scrollX: scrollx,
          dom: 'Bfrtip',
          buttons: {
            dom: {
              button: {
                className: 'btn '
              }
            },
            buttons: [
              { extend: 'excel', className: 'btn-warning', title: $filename },
              { extend: 'csv', className: 'btn-warning', title: $filename }
            ]
          }
          //dom: '<"toolbar">frtip'
        });
        //$("div.toolbar").html('<b>Custom tool bar! Text/images etc.</b>');
      }, 200);
      //console.log([...res]);
      console.log(data);
    });

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var newtoday = yyyy + '-' + mm + '-' + dd;

    var filterdate = newtoday;
    var splitdate = filterdate.split('-');
    var year = splitdate[0],
      month = splitdate[1],
      day = splitdate[2];

    this.userForm.setValue({
      branch_id: "ALL",
      first_date: newtoday,
      second_date: newtoday,
      payment_type: "ALL"
    });

    $(".defaultfd").val(newtoday);
    $(".defaultsd").val(newtoday);

    // Get single User
    this.UserService.getSingleUser().subscribe((data: any) => {
      this.user = data["data"];
      // console.log(this.user);
    });
  }

  changeDate(event: any, $target) {
    var mod = this;
    var year = event['year'];
    var month = event['month'];
    var day = event['day'];
    var tosend = year + '-' + this.pad(month) + '-' + this.pad(day);
    console.log($target + ' is: ' + tosend);
    //$('.classes-list').html('Loading...');
    if ($target == 'first_date') {
      this.userForm.patchValue({
        first_date: tosend
      });
    }

    if ($target == 'second_date') {
      this.userForm.patchValue({
        second_date: tosend
      });
    }

  }

  pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
  }

  submit() {
    // return console.log(this.userForm.value)
    if (this.userForm.controls["first_date"].value == "" || this.userForm.controls["second_date"].value == "") {
      alert("Please insert date");
    } else {
      var mod = this;
      this.table.destroy();
      var items: any = [];
      var itemprints: any = [];
      this.TransactionService.searchRecurring(this.userForm.value).subscribe((data: any[]) => {
        var res = data['data'];

        setTimeout(() => {
          $(".totrev").text("IDR " + data["total_revenue"]);
          $(".tottran").text(data["total_transaction"]);
        }, 200);

        $.each(res, function (i, item) {
          var newthis = [
            item.idtrx,
            item.trace_number,
            item.period,
            item.payment_type === "Autodebit" ? "Autodebit" : "Non-Autodebit",
            item.member_type,
            item.total_session,
            item.personal_trainer_name,
            item.member_name,
            item.authorized,
            item.idr,
          ];
          items.push(newthis);
        });

        var $curdate = this.getTanggal()
        var $first_date = '-' + $curdate;
        var $second_date = '-' + $curdate;
        if (this.userForm.controls["first_date"].value) {
          $first_date = '-' + this.userForm.controls["first_date"].value;
        }
        if (this.userForm.controls["second_date"].value) {
          $second_date = '-' + this.userForm.controls["second_date"].value;
        }
        var $filedate = $first_date + $second_date;
        var $filename = 'EFC-TRANSACTION' + $filedate;

        mod.table = $('#mytable').DataTable({
          // scrollX: true,
          dom: 'Bfrtip',
          buttons: {
            dom: {
              button: {
                className: 'btn '
              }
            },
            buttons: [
              { extend: 'excel', className: 'btn-warning', title: $filename },
              { extend: 'csv', className: 'btn-warning', title: $filename }
            ]
          },
          columns: [
            { title: 'IDTRX' },
            { title: 'Trace Number' },
            { title: 'Trx Date' },
            { title: 'Trx Type' },
            { title: 'Member Type' },
            { title: 'Session' },
            { title: 'PT Name' },
            { title: 'Member Name' },
            { title: 'Verified By' },
            { title: 'Amount (IDR)' },
          ],
          data: items
        });
        // console.log(res);
      });
    }
  }

  getTanggal() {
    var d = new Date();

    var month = d.getMonth() + 1;
    var day = d.getDate();

    var output =
      d.getFullYear() +
      "/" +
      (month < 10 ? "0" : "") +
      month +
      "/" +
      (day < 10 ? "0" : "") +
      day;
    return output;
  }

}

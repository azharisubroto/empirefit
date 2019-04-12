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
import * as $ from "jquery";
import "datatables.net";
import "datatables.net-bs4";
import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';
import 'xlsx';
import 'jspdf-autotable';
import 'tableexport';
import { UserService } from "src/app/shared/services/user.service";
import { EdcService } from "src/app/shared/services/edc.service";


@Component({
  selector: "app-filter-table",
  templateUrl: "./transaction-list.component.html",
  styleUrls: ["./transaction-list.component.css"]
})
export class TransactionListComponent implements OnInit {
  searchControl: FormControl = new FormControl();
  finance: any = [];
  edc: any;
  user: any;
  filteredProducts;
  userForm: FormGroup;
  edcs;
  table;

  constructor(
    private FinanceService: FinanceService,
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
    this.userForm = this.fb.group({
      recuring_date: ["1", Validators.required],
      branch_id: ["1", Validators.required],
      edc_id: ["1", Validators.required],
    });
    this.FinanceService.getRecurings().subscribe((data: any[]) => {
      var res = data['data'];
      this.finance = res;
      this.edc = data['edc'];
      setTimeout(() => {
        this.table = $("#mytable").DataTable({
          scrollX: true,
          //dom: '<"toolbar">frtip'
        });
        //$("div.toolbar").html('<b>Custom tool bar! Text/images etc.</b>');
      }, 200);
      //console.log([...res]);
      //console.log(data);
    });

    // Get single User
    this.UserService.getSingleUser().subscribe((data: any) => {
      this.user = data["data"];
      // console.log(this.user);
    });

    // get edc
    this.EdcService.getEdcs().subscribe((data: any) =>{
      this.edcs = data['data'];
      console.log(this.edcs);
    });
  }

  update(recuring_id) {
    let data = {
      test: 'anjay'
    }
    this.FinanceService.updateRecuring(recuring_id, data).subscribe((data: any) => {
      var res = data;
      //console.log(res);
      location.reload();
    });
  }

  submit() {
    this.table.clear().draw();
    this.FinanceService.searchRecuring(this.userForm.value).subscribe((data: any[]) => {
      var res = data['data'];
      //this.finance = res;
      //this.edc = data['edc'];
      console.log(res);
    });
  }

  open(content) {
    var mod = this;
    this.modalService.open(content, { windowClass: "big-modal" });
    setTimeout(() => {
      // var table = new Tabulator("#example-table", {
      //   layout:"fitColumns",
      // });

      var tanggal = mod.getTanggal();

      $("#pdf-download").click(function () {
        const doc = new jsPDF({
          title: "Example Report"
        });
        var header = function (data) {
          doc.setFontSize(18);
          doc.setTextColor(40);
          doc.setFontStyle('normal');
          doc.text("Credit Card Recurring List", data.settings.margin.left, 20);
          doc.setFontStyle('bold');
          doc.text("EMPIRE FIT CLUB", data.settings.margin.left, 30);
          doc.setFontSize(8);
          doc.text("EDC:" + mod.edc.bank_name, data.settings.margin.left, 40);
          doc.text("MID:" + mod.edc.mid, data.settings.margin.left, 45);
          doc.text("TID:" + mod.edc.tid, data.settings.margin.left, 50);
        };
        doc.autoTable({ html: '#example-table', didDrawPage: header, margin: { top: 60 } });
        doc.save('EFC-Credit-Card-Recurring-List-' + tanggal + '.pdf');
      });

      // $("#xls-download").click(function(){
      //   table.download("xlsx", "data.xlsx", {sheetName:"My Data"});
      // });

      var table = $("#example-table").tableExport({
        exportButtons: true,
        formats: ["xlsx", "csv"],
        bootstrap: false,
        position: 'bottom',
        filename: 'EFC-Credit-Card-Recurring-List-' + tanggal
      });

      $('.button-default').delay(100).addClass('btn btn-primary mr-2');
      $('#pdf-download').delay(100).appendTo('.tableexport-caption');
    }, 100);
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

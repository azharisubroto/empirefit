import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { FinanceService } from "src/app/shared/services/finance.service";
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import * as $ from "jquery";
import Tabulator from "tabulator-tables";
import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';
import 'xlsx';
import 'jspdf-autotable';
import 'tableexport';
import { UserService } from "src/app/shared/services/user.service";
    

@Component({
  selector: "app-filter-table",
  templateUrl: "./transaction-list.component.html",
  styleUrls: ["./transaction-list.component.css"]
})
export class TransactionListComponent implements OnInit {
  searchControl: FormControl = new FormControl();
  finance:any;
  edc:any;
  user:any;
  filteredProducts;

  constructor(
    private FinanceService: FinanceService,
    private router: Router,
    private chRef: ChangeDetectorRef,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private UserService: UserService,
  ) {}

  ngOnInit() {
    this.FinanceService.getAutodebits().subscribe((data: any[]) => {
      var res = data['data'];
      this.finance = [...res];
      this.edc = data['edc'];
      //console.log([...res]);
      console.log(data);
      setTimeout(() => {
        var table = new Tabulator("#tableaja", {
          layout:"fitDataFill",
        });
      }, 10);
    });
    // Get single User
    this.UserService.getSingleUser().subscribe((data: any) => {
      this.user = data["data"];
      // console.log(this.user);
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

      $("#pdf-download").click(function(){
        const doc = new jsPDF({
          title:"Example Report"
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
        doc.autoTable({html: '#example-table', didDrawPage: header, margin: {top: 60}});
        doc.save('EFC-Credit-Card-Recurring-List-'+tanggal+'.pdf'); 
      });

      // $("#xls-download").click(function(){
      //   table.download("xlsx", "data.xlsx", {sheetName:"My Data"});
      // });
      
      var table = $("#example-table").tableExport({
        exportButtons: true,
        formats: ["xlsx", "csv"],
        bootstrap: false,
        position: 'bottom',
        filename: 'EFC-Credit-Card-Recurring-List-'+tanggal
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

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
  thead;
  tbody;

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
      branch_id: ["1", Validators.required],
      edc_id: ["1", Validators.required],
      first_date: ["", Validators.required],
      second_date: ["", Validators.required],
      progress: ["1", Validators.required]
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

    this.thead = $('.tocpy');
    this.thead = $('.tocpy');
  }

  changeDate(event: any, $target) {
    var mod = this;
    var year = event['year'];
    var month = event['month'];
    var day = event['day'];
    var tosend = year + '-' + this.pad(month) + '-' + this.pad(day);
    console.log($target+' is: '+tosend); 
    //$('.classes-list').html('Loading...');
    if( $target ==  'first_date' ) {
      this.userForm.patchValue({
        first_date: tosend
      });
    }

    if( $target == 'second_date' ) {
      this.userForm.patchValue({
        second_date: tosend
      });
    }
    
  }

  pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
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
    var mod = this;
    this.table.destroy();
    var items: any = [];
    this.FinanceService.searchRecuring(this.userForm.value).subscribe((data: any[]) => {
      var res = data['data'];
      $.each(res, function(i, item){
        var newthis = [
            item.date,
            item.member_name,
            item.credit_card_name,
            item.credit_card_number,
            item.credit_card_exp_month+'/'+item.credit_card_exp_year,
            item.recuring_date,
            item.recuring_payment,
            item.unpaid,
            item.finance_status,
            !! item.finance_notes ? item.finance_notes : 'n/a',
            !! item.bank_approval_code ? item.bank_approval_code : 'n/a',
            !! item.bank_notes ? item.bank_notes : 'n/a',
            !! item.bank_withdrawal ? item.bank_withdrawal : 'n/a',
            !! item.fo_status ? item.fo_status : 'n/a',
            !! item.fo_payment ? item.fo_payment : 'n/a',
            '<button class="btn btn btn-sm btn-warning mr-2 ajax-update-btn" data-update="'+item.id+'"><i class="i-Check"></i></button><a href="/finance/transaction-form/'+item.id+'" class="btn btn-sm btn-warning"><i class="i-Pen-4"></i></a>'
        ];
        items.push(newthis);
      });
      mod.table = $('#mytable').DataTable( {
        scrollX: true,
        columns: [
          {title: 'Date'},
          {title: 'Member'},
          {title: 'Name on Card'},
          {title: 'CC Number'},
          {title: 'EXP Date'},
          {title: 'Recurring Date'},
          {title: 'Recurring Payment'},
          {title: 'Unpaid (IDR)'},
          {title: 'Finance Status'},
          {title: 'Finance Notes'},
          {title: 'Bank Approval Code'},
          {title: 'Bank Notes'},
          {title: 'Bank Withdrawal'},
          {title: 'FO Status'},
          {title: 'FO Payment'},
          {title: 'Action'},
        ],
        data: items,
        initComplete: function() {
          $('.ajax-update-btn').on('click', function(e){
            e.preventDefault();
            var update_id = $(this).data('update'); //dapet id
            mod.update(update_id);
          });
        }
      } );
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

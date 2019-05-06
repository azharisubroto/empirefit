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
import { EdcService } from "src/app/shared/services/edc.service";
import { NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";
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
  tanggal;
  total_recuring_payment;
  total_unpaid;
  printTable;


  constructor(
    private FinanceService: FinanceService,
    private router: Router,
    private chRef: ChangeDetectorRef,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private parserFormatter: NgbDateParserFormatter,
    private UserService: UserService,
    private fb: FormBuilder,
    private EdcService: EdcService,
  ) { }


  ngOnInit() {
    var mod = this;
    this.tanggal = this.getTanggal();
    this.userForm = this.fb.group({
      branch_id: ["1", Validators.required],
      edc_id: ["1", Validators.required],
      first_date: ["", Validators.required],
      second_date: ["", Validators.required],
      progress: ["1", Validators.required]
    });
    this.FinanceService.getRecurings().subscribe((data: any[]) => {
      var res = data['data'];
      this.total_recuring_payment = data["total_recuring_payment"];
      this.total_unpaid = data["unpaid"];
      this.finance = res;
      this.edc = data['edc'];
      setTimeout(() => {
        this.printTable = $("#example-table").DataTable();
        this.table = $("#mytable").DataTable({
          scrollX: true,
          autoWidth: true
          //dom: '<"toolbar">frtip'
        });

        setTimeout(() => {
          if (data["data"].progress == '1') {
            $(".ajax-update-btn").attr('disabled', 'disabled');
            $(".refund-btn").removeAttr('disabled');
            console.log(true);
          } else {
            $(".ajax-update-btn").removeAttr('disabled');
            $(".refund-btn").attr('disabled', 'disabled');
          }
        }, 500);

        //$("div.toolbar").html('<b>Custom tool bar! Text/images etc.</b>');
      }, 200);
      //console.log([...res]);
      // console.log(data);
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
      branch_id: "1",
      edc_id: "1",
      first_date: {
        day: day,
        month: month,
        year: year
      },
      second_date: {
        day: day,
        month: month,
        year: year
      },
      progress: "0"
    });

    $(".defaultfd").val(newtoday);
    $(".defaultsd").val(newtoday);

    // Get single User
    this.UserService.getSingleUser().subscribe((data: any) => {
      this.user = data["data"];
      // console.log(this.user);
    });

    // get edc
    this.EdcService.getEdcs().subscribe((data: any) => {
      this.edcs = data['data'];
      // console.log(this.edcs);
    });
  }

  memberpdf($id, $img) {
    var doc = new jsPDF('p', 'pt', 'letter');

    // We'll make our own renderer to skip this editor
    var specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };
    doc.addImage($img, 'PNG', 15, 450, 211, 150);
    doc.fromHTML($('#pdf-' + $id).get(0), 15, 25, {
      'pagesplit': true,
      'width': 550,
      'useCORS': false,
      'elementHandlers': specialElementHandlers
    }, function (dispose) {
      doc.save('autodebit-contract-' + $id + '.pdf');
    });



    // const filename  = 'autodebit-contract-'+$id+'.pdf';

    // html2canvas(document.querySelector('#pdf-'+$id)).then(canvas => {
    // 	let pdf = new jsPDF('p', 'mm', 'a4');
    // 	pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
    // 	pdf.save(filename);
    // });

  }

  changeDate(event, $target) {
    var mod = this;
    var year = event['year'];
    var month = event['month'];
    var day = event['day'];
    var tosend = year + '-' + this.pad(month) + '-' + this.pad(day);
    // console.log($target + ' is: ' + tosend);
    //$('.classes-list').html('Loading...');
    if ($target == 'first_date') {
      this.userForm.patchValue({
        first_date: {
          year: year,
          month: month,
          day: day
        }
      });
    }

    if ($target == 'second_date') {
      this.userForm.patchValue({
        second_date: {
          year: year,
          month: month,
          day: day
        }
      });
    }

    // console.log(this.userForm.controls['first_date'].value)
  }

  pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
  }

  dialogconfirm($event, recuring_id) {
    $event.preventDefault();
    // return console.log($event);
    var mod = this;
    var con = confirm('Are You Sure Want To Approve This Transaction ?');

    if (con) {
      let data = {
        test: 'anjay'
      }

      let first_date = this.userForm.controls["first_date"].value;
      let second_date = this.userForm.controls["second_date"].value;
      let formValue = this.userForm.value;

      formValue['first_date'] = this.parserFormatter.format(first_date);
      formValue['second_date'] = this.parserFormatter.format(second_date);

      var mod = this;
      this.printTable.destroy();
      this.table.destroy();
      var items: any = [];
      var itemprints: any = [];
      this.FinanceService.updateRecuring(recuring_id, data).subscribe((data: any) => {
        var res = data;
        //console.log(res);
        // location.reload();

        this.FinanceService.searchRecuring(formValue).subscribe((data: any) => {
          var res = data['data'];
          console.log(res)
          setTimeout(() => {
            $(".totrec").text("IDR " + data["recuring_payment"].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
            $(".totun").text("IDR " + data["unpaid"].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
          }, 200);
          $.each(res, function (i, item) {
            var newthis = [
              item.date,
              item.member_name,
              item.credit_card_name,
              item.credit_card_number,
              item.credit_card_exp_month + '/' + item.credit_card_exp_year,
              item.recuring_date,
              item.recuring_payment.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
              item.unpaid.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
              item.finance_status,
              !!item.finance_notes ? item.finance_notes : 'n/a',
              !!item.bank_approval_code ? item.bank_approval_code : 'n/a',
              !!item.bank_notes ? item.bank_notes : 'n/a',
              !!item.bank_withdrawal ? item.bank_withdrawal.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : 'n/a',
              !!item.fo_status ? item.fo_status : 'n/a',
              !!item.fo_payment ? item.fo_payment.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : 'n/a',
              '<button class="btn btn-warning btn-sm mr-2 ajax-update-btn" data-update="' + item.id + '"><i class="i-Yes"></i></button><a href="/finance/recurring-form/' + item.id + '" class="btn mr-2 btn-sm btn-warning"><i class="i-Pen-4"></i></a><button data-itemid="' + item.id + '" data-itemimg="' + item.signature_base + '" class="btn btn-sm mr-2 btn-warning btn-download-sign"><i class="i-Download"></i></button><button data-refundid="' + item.id + '" class="btn btn-sm mr-2 btn-warning refund-btn"><i class="i-Token-"></i></button>'
            ];
            var newPrintThis = [
              item.credit_card_number,
              item.credit_card_name,
              item.credit_card_exp_month + '/' + item.credit_card_exp_year,
              item.credit_card_bank_name,
              "-",
              item.recuring_payment,
              "-",
            ];
            itemprints.push(newPrintThis);
            items.push(newthis);
          });

          mod.table = $('#mytable').DataTable({
            scrollX: true,
            columns: [
              { title: 'Date' },
              { title: 'Member' },
              { title: 'Name on Card' },
              { title: 'CC Number' },
              { title: 'EXP Date' },
              { title: 'Recurring Date' },
              { title: 'Recurring Payment' },
              { title: 'Unpaid (IDR)' },
              { title: 'Finance Status' },
              { title: 'Finance Notes' },
              { title: 'Bank Approval Code' },
              { title: 'Bank Notes' },
              { title: 'Bank Withdrawal' },
              { title: 'FO Status' },
              { title: 'FO Payment' },
              { title: 'Action' },
            ],
            data: items,
            initComplete: function () {
              $('.ajax-update-btn').on('click', function (e) {
                e.preventDefault();
                var con = confirm('Are You Sure Want To Approve This Transaction ?');

                if (con) {
                  var update_id = $(this).data('update'); //get id
                  mod.update(update_id);
                } else {
                  console.log(false);
                }
              });

              $(".btn-download-sign").on("click", function (e) {
                e.preventDefault();

                var itemid = $(this).data('itemid'); //get id
                var itemimg = $(this).data('itemimg'); //get img

                mod.memberpdf(itemid, itemimg);
              });

              $(".refund-btn").on("click", function (e) {
                e.preventDefault();

                var refundid = $(this).data('refundid'); //get id

                mod.refund(refundid);
              });
            }
          });

          mod.printTable = $("#example-table").DataTable({
            scrollX: true,
            columns: [
              { title: 'CC Number' },
              { title: 'Card Name' },
              { title: 'EXP Date' },
              { title: 'Bank Name' },
              { title: 'Description' },
              { title: 'Amount' },
              { title: 'Formula' },
            ],
            data: itemprints,
          });
          // console.log(res);
        });
      });
    } else {
      console.log(false);
    }
  }

  update(recuring_id) {

    let data = {
      test: 'anjay'
    }

    let first_date = this.userForm.controls["first_date"].value;
    let second_date = this.userForm.controls["second_date"].value;
    let formValue = this.userForm.value;

    formValue['first_date'] = this.parserFormatter.format(first_date);
    formValue['second_date'] = this.parserFormatter.format(second_date);
    console.log(formValue)

    var mod = this;
    this.printTable.destroy();
    this.table.destroy();
    var items: any = [];
    var itemprints: any = [];
    this.FinanceService.updateRecuring(recuring_id, data).subscribe((data: any) => {
      var res = data;
      //console.log(res);
      // location.reload();

      this.FinanceService.searchRecuring(formValue).subscribe((data: any) => {
        var res = data['data'];
        console.log(res)
        setTimeout(() => {
          $(".totrec").text("IDR " + data["recuring_payment"].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
          $(".totun").text("IDR " + data["unpaid"].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
        }, 200);
        $.each(res, function (i, item) {
          var newthis = [
            item.date,
            item.member_name,
            item.credit_card_name,
            item.credit_card_number,
            item.credit_card_exp_month + '/' + item.credit_card_exp_year,
            item.recuring_date,
            item.recuring_payment.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
            item.unpaid.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
            item.finance_status,
            !!item.finance_notes ? item.finance_notes : 'n/a',
            !!item.bank_approval_code ? item.bank_approval_code : 'n/a',
            !!item.bank_notes ? item.bank_notes : 'n/a',
            !!item.bank_withdrawal ? item.bank_withdrawal.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : 'n/a',
            !!item.fo_status ? item.fo_status : 'n/a',
            !!item.fo_payment ? item.fo_payment.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : 'n/a',
            '<button class="btn btn-warning btn-sm mr-2 ajax-update-btn" data-update="' + item.id + '"><i class="i-Yes"></i></button><a href="/finance/recurring-form/' + item.id + '" class="btn mr-2 btn-sm btn-warning"><i class="i-Pen-4"></i></a><button data-itemid="' + item.id + '" data-itemimg="' + item.signature_base + '" class="btn btn-sm mr-2 btn-warning btn-download-sign"><i class="i-Download"></i></button><button data-refundid="' + item.id + '" class="btn btn-sm mr-2 btn-warning refund-btn"><i class="i-Token-"></i></button>'
          ];
          var newPrintThis = [
            item.credit_card_number,
            item.credit_card_name,
            item.credit_card_exp_month + '/' + item.credit_card_exp_year,
            item.credit_card_bank_name,
            "-",
            item.recuring_payment,
            "-",
          ];
          itemprints.push(newPrintThis);
          items.push(newthis);
        });

        mod.table = $('#mytable').DataTable({
          scrollX: true,
          columns: [
            { title: 'Date' },
            { title: 'Member' },
            { title: 'Name on Card' },
            { title: 'CC Number' },
            { title: 'EXP Date' },
            { title: 'Recurring Date' },
            { title: 'Recurring Payment' },
            { title: 'Unpaid (IDR)' },
            { title: 'Finance Status' },
            { title: 'Finance Notes' },
            { title: 'Bank Approval Code' },
            { title: 'Bank Notes' },
            { title: 'Bank Withdrawal' },
            { title: 'FO Status' },
            { title: 'FO Payment' },
            { title: 'Action' },
          ],
          data: items,
          initComplete: function () {
            $('.ajax-update-btn').on('click', function (e) {
              e.preventDefault();
              var con = confirm('Are You Sure Want To Approve This Transaction ?');

              if (con) {
                var update_id = $(this).data('update'); //get id
                mod.update(update_id);
              } else {
                console.log(false);
              }
            });

            $(".btn-download-sign").on("click", function (e) {
              e.preventDefault();

              var itemid = $(this).data('itemid'); //get id
              var itemimg = $(this).data('itemimg'); //get img

              mod.memberpdf(itemid, itemimg);
            });

            $(".refund-btn").on("click", function (e) {
              e.preventDefault();

              var refundid = $(this).data('refundid'); //get id

              mod.refund(refundid);
            });
          }
        });

        mod.printTable = $("#example-table").DataTable({
          scrollX: true,
          columns: [
            { title: 'CC Number' },
            { title: 'Card Name' },
            { title: 'EXP Date' },
            { title: 'Bank Name' },
            { title: 'Description' },
            { title: 'Amount' },
            { title: 'Formula' },
          ],
          data: itemprints,
        });
        // console.log(res);
      });
    });
  }

  submit() {
    let first_date = this.userForm.controls["first_date"].value;
    let second_date = this.userForm.controls["second_date"].value;
    let formValue = this.userForm.value;

    formValue['first_date'] = this.parserFormatter.format(first_date);
    formValue['second_date'] = this.parserFormatter.format(second_date);
    console.log(formValue)
    if (this.userForm.controls["first_date"].value == "" || this.userForm.controls["second_date"].value == "") {
      alert("Please insert date");
    } else {
      var mod = this;
      this.printTable.destroy();
      this.table.destroy();
      var items: any = [];
      var itemprints: any = [];
      this.FinanceService.searchRecuring(formValue).subscribe((data: any) => {
        var res = data['data'];
        console.log(res)
        setTimeout(() => {
          $(".totrec").text("IDR " + data["recuring_payment"].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
          $(".totun").text("IDR " + data["unpaid"].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
        }, 200);
        $.each(res, function (i, item) {
          var newthis = [
            item.date,
            item.member_name,
            item.credit_card_name,
            item.credit_card_number,
            item.credit_card_exp_month + '/' + item.credit_card_exp_year,
            item.recuring_date,
            item.recuring_payment.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
            item.unpaid.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
            item.finance_status,
            !!item.finance_notes ? item.finance_notes : 'n/a',
            !!item.bank_approval_code ? item.bank_approval_code : 'n/a',
            !!item.bank_notes ? item.bank_notes : 'n/a',
            !!item.bank_withdrawal ? item.bank_withdrawal.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : 'n/a',
            !!item.fo_status ? item.fo_status : 'n/a',
            !!item.fo_payment ? item.fo_payment.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : 'n/a',
            '<button class="btn btn-warning btn-sm mr-2 ajax-update-btn" data-update="' + item.id + '"><i class="i-Yes"></i></button><a href="/finance/recurring-form/' + item.id + '" class="btn mr-2 btn-sm btn-warning"><i class="i-Pen-4"></i></a><button data-itemid="' + item.id + '" data-itemimg="' + item.signature_base + '" class="btn btn-sm mr-2 btn-warning btn-download-sign"><i class="i-Download"></i></button><button data-refundid="' + item.id + '" class="btn btn-sm mr-2 btn-warning refund-btn"><i class="i-Token-"></i></button>'
          ];
          var newPrintThis = [
            item.credit_card_number,
            item.credit_card_name,
            item.credit_card_exp_month + '/' + item.credit_card_exp_year,
            item.credit_card_bank_name,
            "-",
            item.recuring_payment,
            "-",
          ];
          itemprints.push(newPrintThis);
          items.push(newthis);
        });

        mod.table = $('#mytable').DataTable({
          scrollX: true,
          columns: [
            { title: 'Date' },
            { title: 'Member' },
            { title: 'Name on Card' },
            { title: 'CC Number' },
            { title: 'EXP Date' },
            { title: 'Recurring Date' },
            { title: 'Recurring Payment' },
            { title: 'Unpaid (IDR)' },
            { title: 'Finance Status' },
            { title: 'Finance Notes' },
            { title: 'Bank Approval Code' },
            { title: 'Bank Notes' },
            { title: 'Bank Withdrawal' },
            { title: 'FO Status' },
            { title: 'FO Payment' },
            { title: 'Action' },
          ],
          data: items,
          initComplete: function () {
            $('.ajax-update-btn').on('click', function (e) {
              e.preventDefault();
              var con = confirm('Are You Sure Want To Approve This Transaction ?');

              if (con) {
                var update_id = $(this).data('update'); //get id
                mod.update(update_id);
              } else {
                console.log(false);
              }
            });

            $(".btn-download-sign").on("click", function (e) {
              e.preventDefault();

              var itemid = $(this).data('itemid'); //get id
              var itemimg = $(this).data('itemimg'); //get img

              mod.memberpdf(itemid, itemimg);
            });

            $(".refund-btn").on("click", function (e) {
              e.preventDefault();

              var refundid = $(this).data('refundid'); //get id

              mod.refund(refundid);
            });
          }
        });

        mod.printTable = $("#example-table").DataTable({
          scrollX: true,
          columns: [
            { title: 'CC Number' },
            { title: 'Card Name' },
            { title: 'EXP Date' },
            { title: 'Bank Name' },
            { title: 'Description' },
            { title: 'Amount' },
            { title: 'Formula' },
          ],
          data: itemprints,
        });
        // console.log(res);

      });
    }
  }

  open(content) {
    var mod = this;
    this.printTable.destroy();
    var itemprints: any = [];
    this.modalService.open(content, { windowClass: "big-modal" });
    var firstdate = this.userForm.controls["first_date"].value;
    var seconddate = this.userForm.controls["second_date"].value;

    var $curdate = this.getTanggal()
    var $first_date = '-' + $curdate;
    var $second_date = '-' + $curdate;
    if (firstdate) {
      $first_date = '-' + firstdate;
    }
    if (seconddate) {
      $second_date = '-' + seconddate;
    }
    var $filedate = $first_date + $second_date;
    var $filename = 'EFC-RECURRING' + $filedate + "-EDC-" + mod.edc.bank_name + "-MID-" + mod.edc.mid + "-TID-" + mod.edc.tid;

    setTimeout(() => {
      // var table = new Tabulator("#example-table", {
      //   layout:"fitColumns",
      // });

      var tanggal = mod.getTanggal();

      // $("#xls-download").click(function(){
      //   table.download("xlsx", "data.xlsx", {sheetName:"My Data"});
      // });

      // var table = $("#example-table").tableExport({
      //   exportButtons: true,
      //   formats: ["xlsx", "csv"],
      //   bootstrap: false,
      //   position: 'bottom',
      //   filename: 'EFC-Credit-Card-Recurring-List-' + tanggal
      // });

      setTimeout(() => {
        if (firstdate || seconddate) {
          this.FinanceService.searchRecuring(this.userForm.value).subscribe((data: any[]) => {
            var res = data['data'];
            $.each(res, function (i, item) {
              var newPrintThis = [
                item.credit_card_number,
                item.credit_card_name,
                item.credit_card_exp_month + '/' + item.credit_card_exp_year,
                item.credit_card_bank_name,
                "-",
                item.recuring_payment,
                "-",
              ];
              itemprints.push(newPrintThis);
            });

            mod.printTable = $("#example-table").DataTable({
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
                { title: 'CC Number' },
                { title: 'Card Name' },
                { title: 'EXP Date' },
                { title: 'Bank Name' },
                { title: 'Description' },
                { title: 'Amount' },
                { title: 'Formula' },
              ],
              data: itemprints,
            });
            // console.log(res);
          });
        } else {
          $("#example-table").DataTable({
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
          });
        }

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
          doc.save($filename + '.pdf');
        });

        $('.button-default').delay(100).addClass('btn btn-primary mr-2');
        $('#pdf-download').delay(100).appendTo('.tableexport-caption');
      }, 500);
    }, 100);
  }

  refund(recuring_id) {
    let first_date = this.userForm.controls["first_date"].value;
    let second_date = this.userForm.controls["second_date"].value;
    let formValue = this.userForm.value;

    formValue['first_date'] = this.parserFormatter.format(first_date);
    formValue['second_date'] = this.parserFormatter.format(second_date);
    console.log(formValue)

    var mod = this;
    this.printTable.destroy();
    this.table.destroy();
    var items: any = [];
    var itemprints: any = [];

    var con = confirm('This refund procedure cannot be undo, are you sure wants to continue ?');

    if (con) {
      this.FinanceService.refund(recuring_id).subscribe((data: any) => {
        var res = data;
        //console.log(res);
        // location.reload();

        this.FinanceService.searchRecuring(formValue).subscribe((data: any) => {
          var res = data['data'];
          console.log(res)
          setTimeout(() => {
            $(".totrec").text("IDR " + data["recuring_payment"].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
            $(".totun").text("IDR " + data["unpaid"].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
          }, 200);
          $.each(res, function (i, item) {
            var newthis = [
              item.date,
              item.member_name,
              item.credit_card_name,
              item.credit_card_number,
              item.credit_card_exp_month + '/' + item.credit_card_exp_year,
              item.recuring_date,
              item.recuring_payment.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
              item.unpaid.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
              item.finance_status,
              !!item.finance_notes ? item.finance_notes : 'n/a',
              !!item.bank_approval_code ? item.bank_approval_code : 'n/a',
              !!item.bank_notes ? item.bank_notes : 'n/a',
              !!item.bank_withdrawal ? item.bank_withdrawal.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : 'n/a',
              !!item.fo_status ? item.fo_status : 'n/a',
              !!item.fo_payment ? item.fo_payment.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : 'n/a',
              '<button class="btn btn-warning btn-sm mr-2 ajax-update-btn" data-update="' + item.id + '"><i class="i-Yes"></i></button><a href="/finance/recurring-form/' + item.id + '" class="btn mr-2 btn-sm btn-warning"><i class="i-Pen-4"></i></a><button data-itemid="' + item.id + '" data-itemimg="' + item.signature_base + '" class="btn btn-sm mr-2 btn-warning btn-download-sign"><i class="i-Download"></i></button><button data-refundid="' + item.id + '" class="btn btn-sm mr-2 btn-warning refund-btn"><i class="i-Token-"></i></button>'
            ];
            var newPrintThis = [
              item.credit_card_number,
              item.credit_card_name,
              item.credit_card_exp_month + '/' + item.credit_card_exp_year,
              item.credit_card_bank_name,
              "-",
              item.recuring_payment,
              "-",
            ];
            itemprints.push(newPrintThis);
            items.push(newthis);
          });

          mod.table = $('#mytable').DataTable({
            scrollX: true,
            columns: [
              { title: 'Date' },
              { title: 'Member' },
              { title: 'Name on Card' },
              { title: 'CC Number' },
              { title: 'EXP Date' },
              { title: 'Recurring Date' },
              { title: 'Recurring Payment' },
              { title: 'Unpaid (IDR)' },
              { title: 'Finance Status' },
              { title: 'Finance Notes' },
              { title: 'Bank Approval Code' },
              { title: 'Bank Notes' },
              { title: 'Bank Withdrawal' },
              { title: 'FO Status' },
              { title: 'FO Payment' },
              { title: 'Action' },
            ],
            data: items,
            initComplete: function () {
              $('.ajax-update-btn').on('click', function (e) {
                e.preventDefault();
                var con = confirm('Are You Sure Want To Approve This Transaction ?');

                if (con) {
                  var update_id = $(this).data('update'); //get id
                  mod.update(update_id);
                } else {
                  console.log(false);
                }
              });

              $(".btn-download-sign").on("click", function (e) {
                e.preventDefault();

                var itemid = $(this).data('itemid'); //get id
                var itemimg = $(this).data('itemimg'); //get img

                mod.memberpdf(itemid, itemimg);
              });

              $(".refund-btn").on("click", function (e) {
                e.preventDefault();

                var refundid = $(this).data('refundid'); //get id

                mod.refund(refundid);
              });
            }
          });

          mod.printTable = $("#example-table").DataTable({
            scrollX: true,
            columns: [
              { title: 'CC Number' },
              { title: 'Card Name' },
              { title: 'EXP Date' },
              { title: 'Bank Name' },
              { title: 'Description' },
              { title: 'Amount' },
              { title: 'Formula' },
            ],
            data: itemprints,
          });
          // console.log(res);
        });
      });
    } else {
      console.log(false);
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

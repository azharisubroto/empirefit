import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { CustomValidators } from "ng2-validation";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { ProductService } from "src/app/shared/services/product.service";
import { MemberPartnerService } from "src/app/shared/services/memberpartner.service";
import { AuthService } from "src/app/shared/services/auth.service";
import { debounceTime } from "rxjs/operators";
import { NgbModal, NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/shared/services/user.service";
import * as $ from "jquery";
// import "datatables.net";
// import "datatables.net-bs4";
import 'datatables.net-buttons';
import 'datatables.net-buttons-bs4';
import 'datatables.net-buttons/js/buttons.html5.js';

@Component({
  selector: "app-filter-table",
  templateUrl: "./member-partner-list.component.html",
  styleUrls: ["./member-partner-list.component.css"]
})
export class MemberPartnerComponent implements OnInit {
  searchControl: FormControl = new FormControl();
  members: any = [];
  filteredMembers;
  user: any = [];
  absen: FormGroup;
  filterForm: FormGroup;
  status: any;
  table;

  constructor(
    private fb: FormBuilder,
    private MemberPartnerService: MemberPartnerService,
    private UserService: UserService,
    private chRef: ChangeDetectorRef,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private parserFormatter: NgbDateParserFormatter,
  ) { }

  ngOnInit() {
    var mod = this;
    this.absen = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      phone: ["", Validators.required],
      reference: ["", Validators.required],
      email_date_time: ["", Validators.required],
      company: ["", Validators.required],
      class: ["", Validators.required],
      class_date: ["", Validators.required],
      branch: ["", Validators.required],
      status: ["", Validators.required],
      created_by: ["", Validators.required]
    });

    this.MemberPartnerService.showAll().subscribe((data: any[]) => {
      this.members = data["data"];

      this.chRef.detectChanges();
      setTimeout(() => {
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
          "initComplete": function () {
            $('.partners').find('tr').each(function () {
              var ini = $(this),
                absenbutton = ini.find('.absenbutton'),
                classtime = absenbutton.data('classtime'),
                classdate = absenbutton.data('classdate'),
                datenow = mod.getTanggal(),
                datenow2 = datenow.replace(/\//g, '-'),
                classtime2 = classtime.replace(/\:/g, ''),

                sekarang = new Date(datenow2),
                jadwal = new Date(classdate),

                status = absenbutton.data('status');
              // console.log('sekarang: ' + sekarang);
              // console.log('class Date: ' + jadwal);
              if (status == '1') {
                mod.status = 'Used';
                absenbutton.addClass('disabled btn-disabled').removeClass('btn-secondary').attr('disabled');
                ini.addClass('bg-warning').css('color', '#fff');
              }
              // Belom dipake
              else if (status = '0') {
                // kalo tanggal jadwal lebih dari sekarang
                if (jadwal > sekarang) {
                  ini.find('.inistatus').html('Available');
                }
                else {
                  if (classtime2 > mod.getClock()) {
                    ini.find('.inistatus').html('Active');
                  } else if (classtime2 < mod.getClock()) {
                    ini.addClass('bg-danger').css('color', '#fff');
                    ini.find('.inistatus').html('Expired');
                    absenbutton.addClass('disabled btn-disabled').removeClass('btn-secondary').attr('disabled');
                  }
                }
              }
            });
          }
        });
      }, 200);

      // console.log(this.members);
    });

    this.filterForm = this.fb.group({
      date_first: [Validators.required],
      date_second: [Validators.required],
    });

    this.UserService.getSingleUser().subscribe((data: any) => {
      this.user = data["data"];
      //console.log(this.user);
    });
  }

  absencoy(e) {
    var tag = $(e.currentTarget);
    // alert(tag.data('email'));

    var data = {
      status: 1,
      updated_by: this.user.id
    };

    if (tag.data('status') != 1) {
      this.MemberPartnerService.memberPartnerCheckIn(tag.data('id'), data).subscribe((data: any) => {
        var response = data;
        if (data["status"] === "200") {
          this.toastr.success(data["message"], "Success", {
            progressBar: false
          });
          //console.log(data['message']);
        } else {
          this.toastr.error(data["message"], "Error", {
            progressBar: false
          });
        }
      });
    }
  }

  getClock() {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      (today.getHours() < 10 ? '0' : '') + today.getHours() + "" + (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    var dateTime = time;
    return dateTime;
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

  searchHistory() {
    let first_date = this.filterForm.controls["date_first"].value;
    let second_date = this.filterForm.controls["date_second"].value;
    let formValues = ({
      'start_date': this.parserFormatter.format(first_date),
      'second_date': this.parserFormatter.format(second_date),
    });

    if (this.filterForm.invalid) {
      this.toastr.error("Please enter date", "Filter Failed", {
        progressBar: true
      });
    } else {
      var mod = this;
      // console.log(this.table.destroy)
      // this.table.destroy();
      // var items: any = [];
      // this.MemberPartnerService.searchMemberPartner(formValues).subscribe((data: any) => {
      //   var res = data['data'];
      //   $.each(res, function (i, item) {
      //     var newthis = [
      //       item.company,
      //       item.class_date,
      //       item.class_time,
      //       item.name,
      //       item.phone,
      //       item.status === '1' ? 'Used' : 'n/a'
      //     ];
      //     items.push(newthis);
      //   });
      //   setTimeout(() => {
      //     mod.table = $('#mytable').DataTable({
      //       dom: 'Bfrtip',
      //       buttons: {
      //         dom: {
      //           button: {
      //             className: 'btn '
      //           }
      //         },
      //         buttons: [
      //           { extend: 'excel', className: 'btn-warning' },
      //           { extend: 'csv', className: 'btn-warning' }
      //         ]
      //       },
      //       columns: [
      //         { title: 'Partner' },
      //         { title: 'Class Date' },
      //         { title: 'Class Time' },
      //         { title: 'Name' },
      //         { title: 'Phone Number' },
      //         { title: 'Status' },
      //       ],
      //       data: items,
      //       "initComplete": function () {
      //         $('.partners').find('tr').each(function () {
      //           var ini = $(this),
      //             absenbutton = ini.find('.absenbutton'),
      //             classtime = absenbutton.data('classtime'),
      //             classdate = absenbutton.data('classdate'),
      //             datenow = mod.getTanggal(),
      //             datenow2 = datenow.replace(/\//g, '-'),
      //             classtime2 = classtime.replace(/\:/g, ''),

      //             sekarang = new Date(datenow2),
      //             jadwal = new Date(classdate),

      //             status = absenbutton.data('status');
      //           // console.log('sekarang: ' + sekarang);
      //           // console.log('class Date: ' + jadwal);
      //           if (status == '1') {
      //             mod.status = 'Used';
      //             absenbutton.addClass('disabled btn-disabled').removeClass('btn-secondary').attr('disabled');
      //             ini.addClass('bg-warning').css('color', '#fff');
      //           }
      //           // Belom dipake
      //           else if (status = '0') {
      //             // kalo tanggal jadwal lebih dari sekarang
      //             if (jadwal > sekarang) {
      //               ini.find('.inistatus').html('Available');
      //             }
      //             else {
      //               if (classtime2 > mod.getClock()) {
      //                 ini.find('.inistatus').html('Active');
      //               } else if (classtime2 < mod.getClock()) {
      //                 ini.addClass('bg-danger').css('color', '#fff');
      //                 ini.find('.inistatus').html('Expired');
      //                 absenbutton.addClass('disabled btn-disabled').removeClass('btn-secondary').attr('disabled');
      //               }
      //             }
      //           }
      //         });
      //       }
      //     });
      //     setTimeout(() => {
      //       $(".total-attendance").text(data["total_attendance"]);
      //       console.log(data);
      //     }, 500);
      //   }, 500)
      // });
    }
  }
}

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
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { UserService } from "src/app/shared/services/user.service";
import * as $ from "jquery";
import "datatables.net";
import "datatables.net-bs4";

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
  status: any;

  constructor(
    private fb: FormBuilder,
    private MemberPartnerService: MemberPartnerService,
    private UserService: UserService,
    private chRef: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

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
      $("#mytable").DataTable({
        "initComplete": function() {
          $('.partners').find('tr').each(function(){
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
            //console.log('sekarang: '+sekarang);
            //console.log('class Date: '+jadwal);
            if( status == '1' ) {
              mod.status = 'Used';
              absenbutton.addClass('disabled btn-disabled').removeClass('btn-secondary').attr('disabled');
              ini.addClass('bg-warning').css('color', '#fff');
            } 
            // Belom dipake
            else if( status = '0' ) {
              // kalo tanggal jadwal lebih dari sekarang
              if( jadwal > sekarang ) {
                ini.find('.inistatus').html('Available');
              } 
              else {
                if( classtime2 > mod.getClock() ) {
                  ini.find('.inistatus').html('Active');
                } else if( classtime2 < mod.getClock() ){
                  ini.addClass('bg-danger').css('color', '#fff');
                  ini.find('.inistatus').html('Expired');
                  absenbutton.addClass('disabled btn-disabled').removeClass('btn-secondary').attr('disabled');
                }
              }
            } 
          });
        }
      });
      
      //console.log(this.members);
    });

    this.searchControl.valueChanges.pipe(debounceTime(200)).subscribe(value => {
      this.filerData(value);
    });

    this.UserService.getSingleUser().subscribe((data: any) => {
      this.user = data["data"];
      //console.log(this.user);
    });
  }

  absencoy(e) {
    var _this = $(e.currentTarget);
    // alert(_this.data('email'));

    var data = {
      status: 1,
      updated_by: this.user.id
    };

    if( _this.data('status') != 1 ) {
      this.MemberPartnerService.memberPartnerCheckIn( _this.data('id'), data ).subscribe((data: any)=> {
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

  filerData(val) {
    if (val) {
      val = val.toLowerCase();
    } else {
      return (this.filteredMembers = this.members);
    }

    const columns = Object.keys(this.members[0]);
    if (!columns.length) {
      return;
    }

    const rows = this.members.filter(function(d) {
      for (let i = 0; i <= columns.length; i++) {
        const column = columns[i];
        // console.log(d[column]);
        if (
          d[column] &&
          d[column]
            .toString()
            .toLowerCase()
            .indexOf(val) > -1
        ) {
          return true;
        }
      }
    });
    this.filteredMembers = rows;
  }
}

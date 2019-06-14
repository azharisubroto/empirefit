import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ProductService } from "src/app/shared/services/product.service";
import { ClassRegisterService } from "src/app/shared/services/classRegisterService.service";
import { BranchService } from "src/app/shared/services/branch.service";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ScheduleService } from "src/app/shared/services/schedule.service";
import * as $ from "jquery";
// import "datatables.net";
// import "datatables.net-bs4";
import 'datatables.net-buttons';
import 'datatables.net-buttons-bs4';
import 'datatables.net-buttons/js/buttons.html5.js';

@Component({
  selector: "app-filter-table",
  templateUrl: "./schedule-list.component.html",
  styleUrls: ["./schedule-list.component.css"]
})
export class ScheduleListComponent implements OnInit {
  searchControl: FormControl = new FormControl();
  products;
  days;
  classregistrations;
  branches;
  searchForm: FormGroup;
  schedules;
  table;

  constructor(
    private fb: FormBuilder,
    private classRegistrationService: ClassRegisterService,
    private branchService: BranchService,
    private scheduleService: ScheduleService,
    private router: Router,
    private chRef: ChangeDetectorRef,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.classRegistrationService.getClassRegistrations().subscribe((data: any) => {
      this.classregistrations = data["data"];
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
          }
        });
      }, 200);
    });

    this.branchService.getBranches().subscribe((data: any) => {
      this.branches = data["data"];
    });

    this.searchForm = this.fb.group({
      branch_id: ["1", Validators.required],
      date: ["", Validators.required],
      schedule_id: ["0", Validators.required],
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

    this.searchForm.setValue({
      branch_id: 1,
      date: {
        day: day,
        month: month,
        year: year
      },
      schedule_id: 1
    });

    $(".defaultclassdate").val(newtoday);
    this.scheduleService.getByDay(newtoday).subscribe((data: any) => {
      this.schedules = data["data"];

      setTimeout(() => {
        $.each(this.schedules, function (i, list) {
          $("#schedule_list").append(
            "<option value=" + list.id + ">" + list.time + " - " + list.exercise + "</option>"
          )
        })
      }, 500);
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
    if ($target == 'date') {
      this.searchForm.patchValue({
        date: tosend
      });
    }

    this.scheduleService.getByDay(tosend).subscribe((data: any) => {
      this.schedules = data["data"];

      setTimeout(() => {
        $.each(this.schedules, function (i, list) {
          $("#schedule_list").append(
            "<option value=" + list.id + ">" + list.time + " - " + list.exercise + "</option>"
          )
        })
      }, 500);
    });
  }

  pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
  }

  submit() {
    if (this.searchForm.invalid || this.searchForm.controls["schedule_id"].value == 0) {
      alert("Please complete search form");
    } else {
      var mod = this;
      this.table.destroy();
      var items: any = [];
      this.classRegistrationService.searchClass(this.searchForm.value).subscribe((data: any) => {
        var res = data['data'];
        $.each(res, function (i, item) {
          var newthis = [
            item.partner_name,
            item.date,
            item.schedule_time,
            // item.delay_time,
            item.exercise,
            item.member_name,
            item.phone,
          ];
          items.push(newthis);
        });
        mod.table = $('#mytable').DataTable({
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
          columns: [
            { title: 'Partner Name' },
            { title: 'Class Date' },
            { title: 'Class Time' },
            // { title: 'Delay Time' },
            { title: 'Class Name' },
            { title: 'Name' },
            { title: 'Phone Number' },
          ],
          data: items,
        });
      })
    }
  }
}

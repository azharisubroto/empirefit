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
      schedule_id: ["1", Validators.required],
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

      $("#schedule_list").html(
        "<option value=''>Select Schedule</option>"
      )

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
    if (this.searchForm.invalid) {
      this.toastr.error("Please enter date", "Filter Failed", {
        progressBar: true
      });
    } else {
      var mod = this;
      this.table.destroy();
      var items: any = [];
      this.classRegistrationService.searchClass(this.searchForm.value).subscribe((data: any) => {
        var res = data['data'];
        $.each(res, function (i, item) {
          var newthis = [
            item.partner_name,
            item.schedule_date,
            item.schedule_time,
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

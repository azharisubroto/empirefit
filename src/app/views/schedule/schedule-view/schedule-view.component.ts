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
import { Location } from '@angular/common';
import { ToastrService } from "ngx-toastr";
import { Router, ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ScheduleService } from "src/app/shared/services/schedule.service";
import * as $ from "jquery";
// import "datatables.net";
// import "datatables.net-bs4";
import 'datatables.net-buttons';
import 'datatables.net-buttons-bs4';
import 'datatables.net-buttons/js/buttons.html5.js';

@Component({
  selector: 'app-schedule-view',
  templateUrl: './schedule-view.component.html',
  styleUrls: ['./schedule-view.component.scss']
})
export class ScheduleViewComponent implements OnInit {
  searchControl: FormControl = new FormControl();
  products;
  days;
  classregistrations;
  branches;
  searchForm: FormGroup;
  schedules;
  table;
  classhistory;
  viewtabledata;
  exercise;
  time;
  branch_id;
  today;
  totalparticipants;

  constructor(
    private fb: FormBuilder,
    private classRegistrationService: ClassRegisterService,
    private branchService: BranchService,
    private scheduleService: ScheduleService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private chRef: ChangeDetectorRef,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private location: Location
  ) { }

  ngOnInit() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var newtoday = yyyy + '-' + mm + '-' + dd;

    let formData = ({
      schedule_id: this.activatedRoute.snapshot.params['schedule_id'],
      branch_id: this.activatedRoute.snapshot.params['branch_id'],
      date: this.activatedRoute.snapshot.params['date']
    });

    this.scheduleService.showSchedule(this.activatedRoute.snapshot.params['schedule_id']).subscribe((data: any) => {
      this.exercise = data['data'].exercise;
      this.today = newtoday;
      this.time = data['data'].day + ' - ' + data['data'].time;
      this.branch_id = data["data"].branch_name ? data["data"].branch_name : ' - ';
    })

    this.classRegistrationService.viewClass(formData).subscribe((data: any) => {
      this.classhistory = data["data"];

      this.totalparticipants = data["data"][0].total_participants;

      this.chRef.detectChanges();
      $("#mytable").DataTable({
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
    });
  }

  back() {
    this.location.back();
  }

}

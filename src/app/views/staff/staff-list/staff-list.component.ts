import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import * as $ from "jquery";
import "datatables.net";
import "datatables.net-bs4";
import { StaffService } from "src/app/shared/services/staff.service";

@Component({
  selector: "app-filter-table",
  templateUrl: "./staff-list.component.html",
  styleUrls: ["./staff-list.component.css"]
})
export class StaffListComponent implements OnInit {
  searchControl: FormControl = new FormControl();
  staffcomponents: any[];
  confirmResut;
  detail;
  redirect;

  constructor(
    private staffService: StaffService,
    private router: Router,
    private chRef: ChangeDetectorRef,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.staffService.getStaffs().subscribe((data: any) => {
      this.staffcomponents = data["data"];
      this.chRef.detectChanges();
      $("#mytable").DataTable();
    });
  }

  gotoEdit(id) {
    this.redirect = "staff/staff-edit/" + id;
    window.location = this.redirect;
  }

  confirm(content, id) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title", centered: true })
      .result.then(
        result => {
          this.staffService.deleteStaff(id).subscribe((data: any) => {
            if (data["status"] == "200") {
              this.toastr.success(data["message"], "Success!", {
                progressBar: true
              });
              this.confirmResut = `Closed with: ${result}`;
              location.reload();
            }
          });
        },
        reason => {
          this.confirmResut = `Dismissed with: ${reason}`;
        }
      );
  }
}

import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ProductService } from "src/app/shared/services/product.service";
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import * as $ from "jquery";
import "datatables.net";
import "datatables.net-bs4";
import { BranchService } from "src/app/shared/services/branch.service";

@Component({
  selector: "app-filter-table",
  templateUrl: "./branch-list.component.html",
  styleUrls: ["./branch-list.component.css"]
})
export class BranchListComponent implements OnInit {
  searchControl: FormControl = new FormControl();
  branches: any[];
  confirmResut;
  detail;

  constructor(
    private branchService: BranchService,
    private router: Router,
    private chRef: ChangeDetectorRef,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.branchService.getBranches().subscribe((data: any) => {
      this.branches = data["data"];
      this.chRef.detectChanges();
      $("#mytable").DataTable();
    });
  }

  confirm(content, id) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title", centered: true })
      .result.then(
        result => {
          this.branchService.deleteBranch(id).subscribe((data: any) => {
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

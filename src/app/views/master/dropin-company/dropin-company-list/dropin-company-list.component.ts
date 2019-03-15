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
import { DropinCompanyService } from "src/app/shared/services/dropin-company.service";

@Component({
  selector: "app-filter-table",
  templateUrl: "./dropin-company-list.component.html",
  styleUrls: ["./dropin-company-list.component.css"]
})
export class DropinCompanyListComponent implements OnInit {
  searchControl: FormControl = new FormControl();
  dropincompanies: any[];
  confirmResut;
  detail;

  constructor(
    private dropinCompanyService: DropinCompanyService,
    private router: Router,
    private chRef: ChangeDetectorRef,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.dropinCompanyService.getDropinCompanies().subscribe((data: any) => {
      this.dropincompanies = data["data"];
      this.chRef.detectChanges();
      $("#mytable").DataTable();
    });
  }

  confirm(content, id) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title", centered: true })
      .result.then(
        result => {
          this.dropinCompanyService
            .deleteDropinCompany(id)
            .subscribe((data: any) => {
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

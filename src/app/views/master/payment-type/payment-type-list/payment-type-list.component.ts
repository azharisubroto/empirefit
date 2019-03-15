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
import { PaymentTypeService } from "src/app/shared/services/payment-type.service";

@Component({
  selector: "app-filter-table",
  templateUrl: "./payment-type-list.component.html",
  styleUrls: ["./payment-type-list.component.css"]
})
export class PaymentTypeListComponent implements OnInit {
  searchControl: FormControl = new FormControl();
  paymenttypes: any[];
  confirmResut;
  detail;

  constructor(
    private paymentTypeService: PaymentTypeService,
    private router: Router,
    private chRef: ChangeDetectorRef,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.paymentTypeService.getPaymentTypes().subscribe((data: any) => {
      this.paymenttypes = data["data"];
      this.chRef.detectChanges();
      $("#mytable").DataTable();
    });
  }

  confirm(content, id) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title", centered: true })
      .result.then(
        result => {
          this.paymentTypeService
            .deletePaymentType(id)
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

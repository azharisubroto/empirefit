import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ProductService } from "src/app/shared/services/product.service";
import { PriceService } from "src/app/shared/services/price.service";
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import * as $ from "jquery";
import "datatables.net";
import "datatables.net-bs4";

@Component({
  selector: "app-filter-table",
  templateUrl: "./price-list.component.html",
  styleUrls: ["./price-list.component.css"]
})
export class PriceListComponent implements OnInit {
  searchControl: FormControl = new FormControl();
  prices: any[];
  confirmResut;

  constructor(
    private priceService: PriceService,
    private router: Router,
    private chRef: ChangeDetectorRef,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.priceService.getPrices().subscribe((data: any) => {
      this.prices = data["data"];
      this.chRef.detectChanges();
      $("#mytable").DataTable();
    });
  }

  confirm(content, id) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title", centered: true })
      .result.then(
        result => {
          this.priceService.deletePrice(id).subscribe((data: any) => {
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

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
import { ClubBenefitService } from "src/app/shared/services/club-benefit.service";

@Component({
  selector: "app-filter-table",
  templateUrl: "./club-benefit-list.component.html",
  styleUrls: ["./club-benefit-list.component.css"]
})
export class ClubBenefitListComponent implements OnInit {
  searchControl: FormControl = new FormControl();
  clubbenefits: any[];
  confirmResut;
  detail;

  constructor(
    private clubBenefitService: ClubBenefitService,
    private router: Router,
    private chRef: ChangeDetectorRef,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.clubBenefitService.getClubBenefits().subscribe((data: any) => {
      this.clubbenefits = data["data"];
      this.chRef.detectChanges();
      $("#mytable").DataTable();
    });
  }

  confirm(content, id) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title", centered: true })
      .result.then(
        result => {
          this.clubBenefitService
            .deleteClubBenefit(id)
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

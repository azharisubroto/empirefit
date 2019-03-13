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
import { PersonaltrainerService } from "src/app/shared/services/personaltrainer.service";

@Component({
  selector: "app-filter-table",
  templateUrl: "./personal-trainer-list.component.html",
  styleUrls: ["./personal-trainer-list.component.css"]
})
export class PersonalTrainerListComponent implements OnInit {
  searchControl: FormControl = new FormControl();
  personaltrainers: any[];
  confirmResut;
  detail;

  constructor(
    private personalTrainerService: PersonaltrainerService,
    private router: Router,
    private chRef: ChangeDetectorRef,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.personalTrainerService.getPersonalTrainers().subscribe((data: any) => {
      this.personaltrainers = data["data"];
      this.chRef.detectChanges();
      $("#mytable").DataTable();
    });
  }

  confirm(content, id) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title", centered: true })
      .result.then(
        result => {
          this.personalTrainerService
            .deletePersonalTrainer(id)
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

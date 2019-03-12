import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ProductService } from "src/app/shared/services/product.service";
import { UserService } from "src/app/shared/services/user.service";
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
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  searchControl: FormControl = new FormControl();
  users: any[];
  confirmResut;
  detail;

  constructor(
    private userService: UserService,
    private router: Router,
    private chRef: ChangeDetectorRef,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data["data"];
      this.chRef.detectChanges();
      $("#mytable").DataTable();
    });
  }

  showUser(content, id) {
    this.userService.showUser(id).subscribe((data: any) => {
      if (data["status"] == "200") {
        this.detail = data["data"];
        this.open(content, id);
      }
    });
  }

  open(content, id) {
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" });
  }

  confirm(content, id) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title", centered: true })
      .result.then(
        result => {
          this.userService.deleteUser(id).subscribe((data: any) => {
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

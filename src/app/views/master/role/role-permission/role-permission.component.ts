import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ProductService } from "src/app/shared/services/product.service";
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import * as $ from "jquery";
import "datatables.net";
import "datatables.net-bs4";
import { RoleService } from "src/app/shared/services/role.service";
import { PermissionService } from "src/app/shared/services/permission.service";

@Component({
  selector: "app-filter-table",
  templateUrl: "./role-permission.component.html",
  styleUrls: ["./role-permission.component.css"]
})
export class RolePermissionComponent implements OnInit {
  searchControl: FormControl = new FormControl();
  permissionsRole: any[];
  permissions: any[];
  role;
  detail;

  constructor(
    private roleService: RoleService,
    private permissionService: PermissionService,
    private router: Router,
    private chRef: ChangeDetectorRef,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.roleService
      .getPermissions(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.permissionsRole = data["data"];
      });

    this.permissionService.getPermissions().subscribe((data: any) => {
      this.permissions = data["data"];
      this.chRef.detectChanges();
      $("#mytable").DataTable();
    });

    this.roleService
      .showRole(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.role = data["data"].name;
      });

    //Checbox
    $('.selectall').click(function() {
      if ($(this).is(':checked')) {
        $('div input').prop('checked', true);
      } else {
        $('div input').prop('checked', false);
      }
    });
  }
}

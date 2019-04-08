import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ProductService } from "src/app/shared/services/product.service";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
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
  getpermissions: any[];
  role;
  detail;
  loading: boolean;
  permissionForm: FormGroup;

  constructor(
    private roleService: RoleService,
    private permissionService: PermissionService,
    private router: Router,
    private chRef: ChangeDetectorRef,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.roleService
      .getPermissions(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.permissionsRole = data["data"];
      });

    this.permissionService.getPermissions().subscribe((data: any) => {
      this.permissions = data["data"];
      // this.chRef.detectChanges();
      // $("#mytable").DataTable();
    });

    this.permissionForm = this.fb.group({
      permission: [],
    });

    this.roleService
      .showRole(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.role = data["data"].name;
      });

    //Checbox
    $(".selectall").click(function () {
      if ($(this).is(":checked")) {
        $('input[name="permission"]').prop("checked", true);
      } else {
        $('input[name="permission"]').prop("checked", false);
      }
    });

    this.permissionService
      .permission_role(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.getpermissions = data["data"];
        //console.log(this.getpermissions);

        setTimeout(() => {
          var perms = JSON.parse(JSON.stringify(this.getpermissions));
          $.each(perms, function (i, item) {
            $(
              "input[name='permission'][value=" + item.permission_id + "]"
            ).prop("checked", true);
          });
        }, 1000);
      });
  }

  submit() {
    let dataPermission = [];
    let data = this.permissionForm.value;
    $.each($("input[name='permission']:checked"), function () {
      dataPermission.push($(this).val());
    });

    data['permission'] = dataPermission;
    this.loading = true;
    this.permissionService
      .createPermissionRole(
        this.activatedRoute.snapshot.params["id"],
        data
      )
      .subscribe((res: any) => {
        setTimeout(() => {
          this.loading = false;
          if (res["status"] === "200") {
            this.toastr.success(res["message"], "Success!", {
              progressBar: true
            });
            console.log(res["data"])
            this.router.navigateByUrl("master/role");
          } else {
            this.toastr.error(res["message"], "Error!", {
              progressBar: true
            });
          }
        }, 3000);
      });
  }
}

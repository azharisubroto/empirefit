import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ProductService } from "src/app/shared/services/product.service";
import { MemberService } from "src/app/shared/services/member.service";
import { MemberTypeService } from "src/app/shared/services/member-type.service";
import { AuthService } from "src/app/shared/services/auth.service";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import * as $ from "jquery";
import "datatables.net";
import "datatables.net-bs4";
import 'datatables.net-responsive';
import { Utils } from "../../../shared/utils";

@Component({
  selector: "app-filter-table",
  templateUrl: "./member-list.component.html",
  styleUrls: ["./member-list.component.css"]
})
export class MemberComponent implements OnInit {
  searchControl: FormControl = new FormControl();
  members: any = [];
  membertypes: any = [];
  filteredMembers;
  table;
  state;
  member_type_id;
  searchForm: FormGroup;

  constructor(
    private memberService: MemberService,
    private authService: AuthService,
    private chRef: ChangeDetectorRef,
    private fb: FormBuilder,
    private memberTypeService: MemberTypeService,
  ) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      join_date: [Validators.required],
      expairy_date: [Validators.required]
    });

    var today = new Date(),
      month = String(today.getMonth() + 1).padStart(2, '0'), //January is 0!
      yyyy = today.getFullYear();

    this.searchForm.setValue({
      join_date: "",
      expairy_date: ""
    });

    this.memberService.getMember().subscribe((data: any[]) => {
      this.members = data["data"];
      console.log(this.members)
      this.filteredMembers = data["data"];
      this.chRef.detectChanges();
      var dt_options = {};
      dt_options = {
        responsive: true,
        dom: 'Bfrtip',
        buttons: {
          dom: {
            button: {
              className: 'btn '
            }
          },
          buttons: [
            { extend: 'excel', className: 'btn-warning', title: 'MEMBER-REPORT' },
            { extend: 'csv', className: 'btn-warning', title: 'MEMBER-REPORT' }
          ]
        }
      }
      this.table = $("#mytable").DataTable(dt_options);
    });

    this.searchControl.valueChanges.pipe(debounceTime(200)).subscribe(value => {
      this.filerData(value);
    });

    this.memberTypeService.getMemberTypes().subscribe((data: any) => {
      this.membertypes = data["data"];
    });
  }

  // Select All Membership
  allState() {
    if ($("#all-state").is(':checked')) {
      $("input[name='state']").prop('checked', true)
    } else {
      $("input[name='state']").prop('checked', false)
    }
  }

  // Select All Membership
  allMembership() {
    if ($("#all-membership").is(':checked')) {
      $("input[name='member_type_id']").prop('checked', true)
    } else {
      $("input[name='member_type_id']").prop('checked', false)
    }
  }

  filerData(val) {
    if (val) {
      val = val.toLowerCase();
    } else {
      return (this.filteredMembers = this.members);
    }

    const columns = Object.keys(this.members[0]);
    if (!columns.length) {
      return;
    }

    const rows = this.members.filter(function (d) {
      for (let i = 0; i <= columns.length; i++) {
        const column = columns[i];
        // console.log(d[column]);
        if (
          d[column] &&
          d[column]
            .toString()
            .toLowerCase()
            .indexOf(val) > -1
        ) {
          return true;
        }
      }
    });
    this.filteredMembers = rows;
  }

  clearFormSearch() {
    var vm = this;
    $("#all-state").prop('checked', false)
    $("#all-membership").prop('checked', false)
    $("input[name='state']").prop('checked', false)
    $("input[name='member_type_id']").prop('checked', false)

    this.searchForm.setValue({
      join_date: "",
      expairy_date: ""
    });

    this.memberService.getMember().subscribe((data: any[]) => {
      var res = data['data'];

      var items: any = [];
      if (res.length > 0) {
        vm.table.destroy();
        $.each(res, function (i, item) {
          var newthis = [
            `<a
              href="member/detail/` + item.id + `"
              class="btn btn-primary"
              title="Detail"
              triggers="mouseenter:mouseleave"
            >Detail</a>`,
            item.member_code,
            item.name,
            item.nickname ? item.nickname : '-',
            item.member_type_name ? item.member_type_name : '-',
            item.phone,
            item.state,
            item.date_of_birth,
            item.address,
          ];
          items.push(newthis);
        });

        vm.table = $('#mytable').DataTable({
          responsive: true,
          dom: 'Bfrtip',
          buttons: {
            dom: {
              button: {
                className: 'btn '
              }
            },
            buttons: [
              { extend: 'excel', className: 'btn-warning', title: 'MEMBER-REPORT' },
              { extend: 'csv', className: 'btn-warning', title: 'MEMBER-REPORT' }
            ]
          },
          columns: [
            { title: 'Action' },
            { title: 'Member Code' },
            { title: 'Name' },
            { title: 'Nickname' },
            { title: 'Member Type' },
            { title: 'Phone' },
            { title: 'Status' },
            { title: 'Date of birth' },
            { title: 'Address' },
          ],
          data: items,
        });
      } else {
        alert('Data not found')
      }
    });
  }

  submit() {
    let dataState = [];
    this.state = null;
    this.member_type_id = null;

    $.each($("input[name='state']:checked"), function () {
      dataState.push($(this).val());
    });
    this.state = dataState
    // console.log(dataState)

    let dataMembership = [];

    $.each($("input[name='member_type_id']:checked"), function () {
      dataMembership.push($(this).val());
    });
    this.member_type_id = dataMembership
    // console.log(dataMembership)

    var vm = this;
    // console.log(vm.searchForm.value);
    let state = this.state;
    let member_type_id = this.member_type_id;
    let join_date = this.searchForm.controls["join_date"].value;
    let expairy_date = this.searchForm.controls["expairy_date"].value;
    let formValues = {
      'state': state,
      'member_type_id': member_type_id,
      'join_date': join_date,
      'expairy_date': expairy_date
    }

    this.memberService.filter(formValues).subscribe((data: any) => {
      var res = data['data'];

      var items: any = [];
      if (res.length > 0) {
        vm.table.destroy();
        $.each(res, function (i, item) {
          var newthis = [
            item.member_code,
            item.name,
            item.nickname ? item.nickname : '-',
            item.member_type_name ? item.member_type_name : '-',
            item.phone,
            item.state,
            `<a
              href="member/detail/` + item.id + `"
              class="btn btn-primary"
              title="Detail"
              triggers="mouseenter:mouseleave"
            >Detail</a>`
          ];
          items.push(newthis);
        });

        vm.table = $('#mytable').DataTable({
          responsive: true,
          dom: 'Bfrtip',
          buttons: {
            dom: {
              button: {
                className: 'btn '
              }
            },
            buttons: [
              { extend: 'excel', className: 'btn-warning', title: 'MEMBER-REPORT' },
              { extend: 'csv', className: 'btn-warning', title: 'MEMBER-REPORT' }
            ]
          },
          columns: [
            { title: 'Member Code' },
            { title: 'Name' },
            { title: 'Nickname' },
            { title: 'Member Type' },
            { title: 'Phone' },
            { title: 'Status' },
            { title: 'Action' },
          ],
          data: items,
        });
      } else {
        alert('Data not found')
      }
    })
  }
}

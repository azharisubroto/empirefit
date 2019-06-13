import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ProductService } from "src/app/shared/services/product.service";
import { MemberService } from "src/app/shared/services/member.service";
import { AuthService } from "src/app/shared/services/auth.service";
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import * as $ from "jquery";
import "datatables.net";
import "datatables.net-bs4";

@Component({
  selector: "app-filter-table",
  templateUrl: "./member-list.component.html",
  styleUrls: ["./member-list.component.css"]
})
export class MemberComponent implements OnInit {
  searchControl: FormControl = new FormControl();
  members: any = [];
  filteredMembers;

  constructor(
    private memberService: MemberService,
    private authService: AuthService,
    private chRef: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.memberService.getMember().subscribe((data: any[]) => {
      this.members = data["data"];
      this.filteredMembers = data["data"];
      this.chRef.detectChanges();
      $("#mytable").DataTable();
    });

    this.searchControl.valueChanges.pipe(debounceTime(200)).subscribe(value => {
      this.filerData(value);
    });
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

    const rows = this.members.filter(function(d) {
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
}

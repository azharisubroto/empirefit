import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/shared/services/product.service";
import { UserService } from "src/app/shared/services/user.service";
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-filter-table",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  searchControl: FormControl = new FormControl();
  users;
  filteredUsers;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data["data"];
      this.filteredUsers = data["data"];
    });

    this.searchControl.valueChanges.pipe(debounceTime(200)).subscribe(value => {
      this.filerData(value);
    });
  }

  filerData(val) {
    if (val) {
      val = val.toLowerCase();
    } else {
      return (this.filteredUsers = this.users);
    }

    const columns = Object.keys(this.users[0]);
    if (!columns.length) {
      return;
    }

    const rows = this.users.filter(function(d) {
      for (let i = 0; i <= columns.length; i++) {
        const column = columns[i];
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
    this.filteredUsers = rows;
  }
}

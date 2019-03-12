import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/shared/services/product.service";
import { UserService } from "src/app/shared/services/user.service";
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
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
  users;
  filteredUsers;
  // Our array of clients
  clients: any[];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data: any) => {
      this.clients = data["data"];
      // this.filteredUsers = data["data"];
    });

    $("#mytable").DataTable();
  }
}

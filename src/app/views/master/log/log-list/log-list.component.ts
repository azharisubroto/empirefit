import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { FormControl } from "@angular/forms";
import * as $ from "jquery";
import "datatables.net";
import "datatables.net-bs4";
import { LogService } from "src/app/shared/services/log.service";

@Component({
  selector: "app-filter-table",
  templateUrl: "./log-list.component.html",
  styleUrls: ["./log-list.component.scss"]
})
export class LogListComponent implements OnInit {
  searchControl: FormControl = new FormControl();
  logs: any[];

  constructor(
    private logService: LogService,
    private chRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.logService.getLogs().subscribe((data: any) => {
      this.logs = data["data"];
      this.chRef.detectChanges();
      $("#mytable").DataTable();
    });
  }
}

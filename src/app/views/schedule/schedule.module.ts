import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxPaginationModule } from "ngx-pagination";

import { ScheduleRoutingModule } from "./schedule-routing.module";
import { ScheduleListComponent } from "./schedule-list/schedule-list.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ScheduleReportComponent } from './schedule-report/schedule-report.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxDatatableModule,
    NgbModule,
    ScheduleRoutingModule
  ],
  declarations: [ScheduleListComponent, ScheduleReportComponent]
})
export class ScheduleModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ScheduleListComponent } from "./schedule-list/schedule-list.component";
import { ScheduleReportComponent } from "./schedule-report/schedule-report.component";

const routes: Routes = [
  {
    path: "class-list",
    component: ScheduleListComponent
  },
  {
    path: "class-report",
    component: ScheduleReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }

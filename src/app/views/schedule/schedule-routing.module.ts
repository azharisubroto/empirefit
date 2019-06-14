import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// import { ScheduleListComponent } from "./schedule-list/schedule-list.component";
import { ScheduleReportComponent } from "./schedule-report/schedule-report.component";
import { ScheduleViewComponent } from "./schedule-view/schedule-view.component";

const routes: Routes = [
  // {
  //   path: "class-list",
  //   component: ScheduleListComponent
  // },
  {
    path: "",
    component: ScheduleReportComponent
  },
  {
    path: "class-view/:schedule_id/:date/:branch_id",
    component: ScheduleViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }

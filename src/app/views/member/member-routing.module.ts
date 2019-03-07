import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MemberComponent } from "./member-list/member-list.component";
import { MemberEditComponent } from "./member-edit/member-edit.component";
import { MemberAttendanceComponent } from "./member-attendance/member-attendance.component";
import { MemberLeaveComponent } from "./member-leave/member-leave.component";

const routes: Routes = [
  {
    path: "",
    component: MemberComponent
  },
  {
    path: "member/edit",
    component: MemberEditComponent
  },
  {
    path: "member/attendance",
    component: MemberAttendanceComponent
  },
  {
    path: "member/leave",
    component: MemberLeaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule {}

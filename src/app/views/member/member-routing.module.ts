import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MemberComponent } from "./member-list/member-list.component";
import { MemberEditComponent } from "./member-edit/member-edit.component";
import { MemberAttendanceComponent } from "./member-attendance/member-attendance.component";
import { MemberLeaveComponent } from "./member-leave/member-leave.component";
import { MemberActivationComponent } from "./member-activation/member-activation.component";
import { MemberActivationSuccessComponent } from "./member-activation-success/member-activation-success.component";

const routes: Routes = [
  {
    path: "",
    component: MemberComponent
  },
  {
    path: "member/edit/:id",
    component: MemberEditComponent
  },
  {
    path: "member/detail/:id",
    component: MemberAttendanceComponent
  },
  {
    path: "member/leave/:id",
    component: MemberLeaveComponent
  },
  {
    path: "member/activation/:id",
    component: MemberActivationComponent
  },
  {
    path: "member/activate/success",
    component: MemberActivationSuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule {}

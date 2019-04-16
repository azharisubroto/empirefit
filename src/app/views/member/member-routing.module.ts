import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MemberComponent } from "./member-list/member-list.component";
import { MemberEditComponent } from "./member-edit/member-edit.component";
import { MemberAttendanceComponent } from "./member-attendance/member-attendance.component";
import { MemberLeaveComponent } from "./member-leave/member-leave.component";
import { MemberActivationComponent } from "./member-activation/member-activation.component";
import { MemberActivationSuccessComponent } from "./member-activation-success/member-activation-success.component";
import { PtSessionComponent } from "./pt-session/pt-session.component";
import { MemberPackageComponent } from "./member-package/member-package.component";

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
    path: "member/pt-session/:id",
    component: PtSessionComponent
  },
  {
    path: "member/activate/success",
    component: MemberActivationSuccessComponent
  },
  {
    path: "member/select-package/:id",
    component: MemberPackageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }

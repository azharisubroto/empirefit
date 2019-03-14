import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthLayoutComponent } from "./shared/components/layouts/auth-layout/auth-layout.component";
import { AuthGaurd } from "./shared/services/auth.gaurd";
import { BlankLayoutComponent } from "./shared/components/layouts/blank-layout/blank-layout.component";
import { AdminLayoutSidebarCompactComponent } from "./shared/components/layouts/admin-layout-sidebar-compact/admin-layout-sidebar-compact.component";
import { AdminLayoutSidebarLargeComponent } from "./shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component";

let domainName = "";
if (location.hostname !== "localhost") domainName = "empirefit.club/";
const adminRoutes: Routes = [
  {
    path: domainName + "dashboard",
    loadChildren: "./views/member/member.module#MemberModule"
  },
  {
    path: domainName + "member-partner",
    loadChildren:
      "./views/member-partner/member-partner.module#MemberPartnerModule"
  },
  {
    path: domainName + "staff",
    loadChildren: "./views/staff/staff.module#StaffModule"
  },
  {
    path: domainName + "schedule",
    loadChildren: "./views/schedule/schedule.module#ScheduleModule"
  },
  {
    path: domainName + "finance",
    loadChildren: "./views/finance/finance.module#FinanceModule"
  },
  {
    path: domainName + "master",
    loadChildren: "./views/master/master.module#MasterModule"
  }
];

const routes: Routes = [
  {
    path: "",
    redirectTo: domainName + "dashboard",
    pathMatch: "full"
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: domainName + "sessions",
        loadChildren: "./views/sessions/sessions.module#SessionsModule"
      }
    ]
  },
  {
    path: "",
    component: BlankLayoutComponent,
    children: [
      {
        path: domainName + "others",
        loadChildren: "./views/others/others.module#OthersModule"
      }
    ]
  },
  {
    path: "",
    component: AdminLayoutSidebarLargeComponent,
    canActivate: [AuthGaurd],
    children: adminRoutes
  },
  {
    path: "**",
    redirectTo: "others/404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

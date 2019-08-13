import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthLayoutComponent } from "./shared/components/layouts/auth-layout/auth-layout.component";
import { AuthGaurd } from "./shared/services/auth.gaurd";
import { AuthPermission } from "./shared/services/auth.permission";
import { BlankLayoutComponent } from "./shared/components/layouts/blank-layout/blank-layout.component";
import { AdminLayoutSidebarCompactComponent } from "./shared/components/layouts/admin-layout-sidebar-compact/admin-layout-sidebar-compact.component";
import { AdminLayoutSidebarLargeComponent } from "./shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component";
import { MemberPartnerComponent } from "./views/member-partner/member-partner-list/member-partner-list.component";

const dashboard: Routes = [
  {
    path: "dashboard",
    canActivate: [AuthPermission],
    data: {
      expectedPermission: '2'
    },
    loadChildren: "./views/member/member.module#MemberModule"
  },
  {
    path: "member-partner",
    canActivate: [AuthPermission],
    data: {
      expectedPermission: '3'
    },
    loadChildren:
      "./views/member-partner/member-partner.module#MemberPartnerModule"
  },
  {
    path: "staff",
    canActivate: [AuthPermission],
    data: {
      expectedPermission: '4'
    },
    loadChildren: "./views/staff/staff.module#StaffModule"
  },
  {
    path: "class-participants",
    canActivate: [AuthPermission],
    data: {
      expectedPermission: '5'
    },
    loadChildren: "./views/schedule/schedule.module#ScheduleModule"
  },
  {
    path: "registration",
    loadChildren: "./views/registration/registration.module#RegistrationModule"
  },
  {
    path: "finance",
    canActivate: [AuthPermission],
    data: {
      expectedPermission: '6'
    },
    loadChildren: "./views/finance/finance.module#FinanceModule"
  },
  {
    path: "master",
    canActivate: [AuthPermission],
    data: {
      expectedPermission: '7'
    },
    loadChildren: "./views/master/master.module#MasterModule"
  }
];

const memberPartner: Routes = [
  {
    path: "member-partner",
    loadChildren:
      "./views/member-partner/member-partner.module#MemberPartnerModule"
  },
]

const staff: Routes = [
  {
    path: "staff",
    loadChildren: "./views/staff/staff.module#StaffModule"
  },
]

const schedule: Routes = [
  {
    path: "schedule",
    loadChildren: "./views/schedule/schedule.module#ScheduleModule"
  },
]

const registration: Routes = [
  {
    path: "registration",
    loadChildren: "./views/registration/registration.module#RegistrationModule"
  },
]

const finance: Routes = [
  {
    path: "finance",
    loadChildren: "./views/finance/finance.module#FinanceModule"
  },
]

const master: Routes = [
  {
    path: "master",
    loadChildren: "./views/master/master.module#MasterModule"
  },
]

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "sessions",
        loadChildren: "./views/sessions/sessions.module#SessionsModule"
      }
    ]
  },
  {
    path: "",
    component: AdminLayoutSidebarLargeComponent,
    children: [
      {
        path: "reset-password",
        loadChildren: "./views/reset-password/reset-password.module#ResetPasswordModule"
      }
    ]
  },
  {
    path: "",
    component: BlankLayoutComponent,
    children: [
      {
        path: "others",
        loadChildren: "./views/others/others.module#OthersModule"
      }
    ]
  },
  {
    path: "",
    component: AdminLayoutSidebarLargeComponent,
    canActivate: [AuthGaurd],
    children: dashboard
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
export class AppRoutingModule { }

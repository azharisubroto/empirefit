import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthLayoutComponent } from "./shared/components/layouts/auth-layout/auth-layout.component";
import { AuthGaurd } from "./shared/services/auth.gaurd";
import { BlankLayoutComponent } from "./shared/components/layouts/blank-layout/blank-layout.component";
import { AdminLayoutSidebarCompactComponent } from "./shared/components/layouts/admin-layout-sidebar-compact/admin-layout-sidebar-compact.component";
import { AdminLayoutSidebarLargeComponent } from "./shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component";

const adminRoutes: Routes = [
  {
    path: "dashboard",
    loadChildren: "./views/member/member.module#MemberModule"
  },
  {
    path: "member-partner",
    loadChildren:
      "./views/member-partner/member-partner.module#MemberPartnerModule"
  },
  {
    path: "staff",
    loadChildren: "./views/staff/staff.module#StaffModule"
  },
  {
    path: "schedule",
    loadChildren: "./views/schedule/schedule.module#ScheduleModule"
  },
  {
    path: "finance",
    loadChildren: "./views/finance/finance.module#FinanceModule"
  },
  {
    path: "master",
    loadChildren: "./views/master/master.module#MasterModule"
  },
  {
    path: "chat",
    loadChildren: "./views/chat/chat.module#ChatModule"
  },
  {
    path: "tables",
    loadChildren: "./views/data-tables/data-tables.module#DataTablesModule"
  },
  {
    path: "pages",
    loadChildren: "./views/pages/pages.module#PagesModule"
  },
  {
    path: "icons",
    loadChildren: "./views/icons/icons.module#IconsModule"
  }
];

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
    children: adminRoutes
  },
  {
    path: "**",
    redirectTo: "others/404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

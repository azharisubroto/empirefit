import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserListComponent } from "./user/user-list/user-list.component";
import { RoleListComponent } from "./role/role-list/role-list.component";
import { RoleFormComponent } from "./role/role-form/role-form.component";
import { PermissionListComponent } from "./permission/permission-list/permission-list.component";
import { PermissionFormComponent } from "./permission/permission-form/permission-form.component";
import { PersonalTrainerListComponent } from "./personal-trainer/personal-trainer-list/personal-trainer-list.component";
import { PersonalTrainerFormComponent } from "./personal-trainer/personal-trainer-form/personal-trainer-form.component";
import { InstructureListComponent } from "./instructure/instructure-list/instructure-list.component";
import { InstructureFormComponent } from "./instructure/instructure-form/instructure-form.component";
import { ScheduleListComponent } from "./schedule/schedule-list/schedule-list.component";
import { ScheduleFormComponent } from "./schedule/schedule-form/schedule-form.component";

const routes: Routes = [
  {
    path: "user",
    component: UserListComponent
  },
  {
    path: "role",
    component: RoleListComponent
  },
  {
    path: "role/create",
    component: RoleFormComponent
  },
  {
    path: "permission",
    component: PermissionListComponent
  },
  {
    path: "permission/create",
    component: PermissionFormComponent
  },
  {
    path: "personal-trainer",
    component: PersonalTrainerListComponent
  },
  {
    path: "personal-trainer/create",
    component: PersonalTrainerFormComponent
  },
  {
    path: "instructure",
    component: InstructureListComponent
  },
  {
    path: "instructure/create",
    component: InstructureFormComponent
  },
  {
    path: "schedule",
    component: ScheduleListComponent
  },
  {
    path: "schedule/create",
    component: ScheduleFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule {}

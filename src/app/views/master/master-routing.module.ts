import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserListComponent } from "./user/user-list/user-list.component";
import { RoleListComponent } from "./role/role-list/role-list.component";
import { RoleFormComponent } from "./role/role-form/role-form.component";
import { PermissionListComponent } from "./permission/permission-list/permission-list.component";
import { PermissionFormComponent } from "./permission/permission-form/permission-form.component";

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
    component: RoleListComponent
  },
  {
    path: "permission/create",
    component: RoleFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule {}

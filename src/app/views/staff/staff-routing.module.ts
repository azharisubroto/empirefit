import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StaffListComponent } from "./staff-list/staff-list.component";
import { StaffRegistrationComponent } from "./staff-registration/staff-registration.component";

const routes: Routes = [
  {
    path: "list",
    component: StaffListComponent
  },
  {
    path: "registration",
    component: StaffRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StaffListComponent } from "./staff-list/staff-list.component";
import { StaffRegistrationComponent } from "./staff-registration/staff-registration.component";
import { StaffFormComponent } from "./staff-form/staff-form.component";

const routes: Routes = [
  {
    path: "",
    component: StaffListComponent
  },
  {
    path: "staff-registration",
    component: StaffRegistrationComponent
  },
  {
    path: "staff-update/:id",
    component: StaffFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule {}

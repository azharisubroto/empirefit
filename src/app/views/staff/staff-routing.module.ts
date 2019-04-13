import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StaffListComponent } from "./staff-list/staff-list.component";
import { StaffRegistrationComponent } from "./staff-registration/staff-registration.component";
import { StaffFormComponent } from "./staff-form/staff-form.component";
import { StaffAttendanceComponent } from "./staff-attendance/staff-attendance.component";

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
    path: "staff-edit/:id",
    component: StaffFormComponent
  },
  {
    path: "staff-attendance/:id",
    component: StaffAttendanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }

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
import { PaymentTypeListComponent } from "./payment-type/payment-type-list/payment-type-list.component";
import { PaymentTypeFormComponent } from "./payment-type/payment-type-form/payment-type-form.component";
import { PackageListComponent } from "./package/package-list/package-list.component";
import { PackageFormComponent } from "./package/package-form/package-form.component";
import { MemberTypeListComponent } from "./member-type/member-type-list/member-type-list.component";
import { MemberTypeFormComponent } from "./member-type/member-type-form/member-type-form.component";
import { PriceListComponent } from "./price/price-list/price-list.component";
import { PriceFormComponent } from "./price/price-form/price-form.component";
import { BenefitListComponent } from "./benefit/benefit-list/benefit-list.component";
import { BenefitFormComponent } from "./benefit/benefit-form/benefit-form.component";
import { ClubBenefitListComponent } from "./club-benefit/club-benefit-list/club-benefit-list.component";
import { ClubBenefitFormComponent } from "./club-benefit/club-benefit-form/club-benefit-form.component";

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
  },
  {
    path: "payment-type",
    component: PaymentTypeListComponent
  },
  {
    path: "payment-type/create",
    component: PaymentTypeFormComponent
  },
  {
    path: "package",
    component: PackageListComponent
  },
  {
    path: "package/create",
    component: PackageFormComponent
  },
  {
    path: "member-type",
    component: MemberTypeListComponent
  },
  {
    path: "member-type/create",
    component: MemberTypeFormComponent
  },
  {
    path: "price",
    component: PriceListComponent
  },
  {
    path: "price/create",
    component: PriceFormComponent
  },
  {
    path: "benefit",
    component: BenefitListComponent
  },
  {
    path: "benefit/create",
    component: BenefitFormComponent
  },
  {
    path: "club-benefit",
    component: ClubBenefitListComponent
  },
  {
    path: "club-benefit/create",
    component: ClubBenefitFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule {}

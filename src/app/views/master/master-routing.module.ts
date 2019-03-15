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
import { DropinTypeListComponent } from "./dropin-type/dropin-type-list/dropin-type-list.component";
import { DropinTypeFormComponent } from "./dropin-type/dropin-type-form/dropin-type-form.component";
import { DropinCompanyListComponent } from "./dropin-company/dropin-company-list/dropin-company-list.component";
import { DropinCompanyFormComponent } from "./dropin-company/dropin-company-form/dropin-company-form.component";
import { UserFormComponent } from "./user/user-form/user-form.component";
import { UserCreateComponent } from "./user/user-create/user-create.component";
import { RoleCreateComponent } from "./role/role-create/role-create.component";
import { PermissionCreateComponent } from "./permission/permission-create/permission-create.component";
import { InstructureCreateComponent } from "./instructure/instructure-create/instructure-create.component";
import { PersonalTrainerCreateComponent } from "./personal-trainer/personal-trainer-create/personal-trainer-create.component";
import { RolePermissionComponent } from "./role/role-permission/role-permission.component";
import { ScheduleCreateComponent } from "./schedule/schedule-create/schedule-create.component";

const routes: Routes = [
  {
    path: "user",
    component: UserListComponent
  },
  {
    path: "user/user-edit/:id",
    component: UserFormComponent
  },
  {
    path: "user/user-create",
    component: UserCreateComponent
  },
  {
    path: "role",
    component: RoleListComponent
  },
  {
    path: "role/role-create",
    component: RoleCreateComponent
  },
  {
    path: "role/role-edit/:id",
    component: RoleFormComponent
  },
  {
    path: "role/role-permission/:id",
    component: RolePermissionComponent
  },
  {
    path: "permission",
    component: PermissionListComponent
  },
  {
    path: "permission/permission-edit/:id",
    component: PermissionFormComponent
  },
  {
    path: "permission/permission-create",
    component: PermissionCreateComponent
  },
  {
    path: "personal-trainer",
    component: PersonalTrainerListComponent
  },
  {
    path: "personal-trainer/personal-trainer-create",
    component: PersonalTrainerCreateComponent
  },
  {
    path: "personal-trainer/personal-trainer-edit/:id",
    component: PersonalTrainerFormComponent
  },
  {
    path: "instructure",
    component: InstructureListComponent
  },
  {
    path: "instructure/instructure-create",
    component: InstructureCreateComponent
  },
  {
    path: "schedule",
    component: ScheduleListComponent
  },
  {
    path: "schedule/schedule-create",
    component: ScheduleCreateComponent
  },
  {
    path: "schedule/schedule-edit/:id",
    component: ScheduleFormComponent
  },
  {
    path: "payment-type",
    component: PaymentTypeListComponent
  },
  {
    path: "payment-type/payment-type-edit/:id",
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
  },
  {
    path: "dropin-type",
    component: DropinTypeListComponent
  },
  {
    path: "dropin-type/create",
    component: DropinTypeFormComponent
  },
  {
    path: "dropin-company",
    component: DropinCompanyListComponent
  },
  {
    path: "dropin-company/create",
    component: DropinCompanyFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule {}

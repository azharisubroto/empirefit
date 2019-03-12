import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxPaginationModule } from "ngx-pagination";

import { SharedComponentsModule } from "src/app/shared/components/shared-components.module";
import { FormWizardModule } from "src/app/shared/components/form-wizard/form-wizard.module";
import { TextMaskModule } from "angular2-text-mask";

import { MasterRoutingModule } from "./master-routing.module";
import { UserListComponent } from "./user/user-list/user-list.component";
import { RoleFormComponent } from "./role/role-form/role-form.component";
import { RoleListComponent } from "./role/role-list/role-list.component";
import { PermissionFormComponent } from "./permission/permission-form/permission-form.component";
import { PermissionListComponent } from "./permission/permission-list/permission-list.component";
import { PersonalTrainerFormComponent } from "./personal-trainer/personal-trainer-form/personal-trainer-form.component";
import { PersonalTrainerListComponent } from "./personal-trainer/personal-trainer-list/personal-trainer-list.component";
import { InstructureFormComponent } from "./instructure/instructure-form/instructure-form.component";
import { InstructureListComponent } from "./instructure/instructure-list/instructure-list.component";
import { ScheduleFormComponent } from "./schedule/schedule-form/schedule-form.component";
import { ScheduleListComponent } from "./schedule/schedule-list/schedule-list.component";
import { PaymentTypeFormComponent } from "./payment-type/payment-type-form/payment-type-form.component";
import { PaymentTypeListComponent } from "./payment-type/payment-type-list/payment-type-list.component";
import { PackageFormComponent } from "./package/package-form/package-form.component";
import { PackageListComponent } from "./package/package-list/package-list.component";
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

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { UserFormComponent } from "./user/user-form/user-form.component";
import { UserCreateComponent } from "./user/user-create/user-create.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxDatatableModule,
    NgbModule,
    MasterRoutingModule,
    SharedComponentsModule,
    FormWizardModule,
    TextMaskModule
  ],
  declarations: [
    UserListComponent,
    RoleFormComponent,
    RoleListComponent,
    PermissionFormComponent,
    PermissionListComponent,
    PersonalTrainerFormComponent,
    PersonalTrainerListComponent,
    InstructureFormComponent,
    InstructureListComponent,
    ScheduleFormComponent,
    ScheduleListComponent,
    PaymentTypeFormComponent,
    PaymentTypeListComponent,
    PackageFormComponent,
    PackageListComponent,
    MemberTypeFormComponent,
    MemberTypeListComponent,
    PriceFormComponent,
    PriceListComponent,
    BenefitFormComponent,
    BenefitListComponent,
    ClubBenefitFormComponent,
    ClubBenefitListComponent,
    DropinTypeFormComponent,
    DropinTypeListComponent,
    DropinCompanyFormComponent,
    DropinCompanyListComponent,
    UserFormComponent,
    UserCreateComponent
  ]
})
export class MasterModule {}

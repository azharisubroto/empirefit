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
import { InstructureListComponent } from "./instructure/instructure-list/instructure-list.component";
import { ScheduleFormComponent } from "./schedule/schedule-form/schedule-form.component";
import { ScheduleListComponent } from "./schedule/schedule-list/schedule-list.component";
import { PaymentTypeFormComponent } from "./payment-type/payment-type-form/payment-type-form.component";
import { PaymentTypeListComponent } from "./payment-type/payment-type-list/payment-type-list.component";
import { MemberTypeListComponent } from "./member-type/member-type-list/member-type-list.component";
import { MemberTypeFormComponent } from "./member-type/member-type-form/member-type-form.component";
import { PriceListComponent } from "./price/price-list/price-list.component";
import { PriceFormComponent } from "./price/price-form/price-form.component";
import { BenefitListComponent } from "./benefit/benefit-list/benefit-list.component";
import { BenefitFormComponent } from "./benefit/benefit-form/benefit-form.component";
import { ClubBenefitListComponent } from "./club-benefit/club-benefit-list/club-benefit-list.component";
import { ClubBenefitFormComponent } from "./club-benefit/club-benefit-form/club-benefit-form.component";
import { DropinCompanyListComponent } from "./dropin-company/dropin-company-list/dropin-company-list.component";
import { DropinCompanyFormComponent } from "./dropin-company/dropin-company-form/dropin-company-form.component";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { UserFormComponent } from "./user/user-form/user-form.component";
import { UserCreateComponent } from "./user/user-create/user-create.component";
import { RoleCreateComponent } from "./role/role-create/role-create.component";
import { RolePermissionComponent } from "./role/role-permission/role-permission.component";
import { PermissionCreateComponent } from "./permission/permission-create/permission-create.component";
import { PersonalTrainerCreateComponent } from "./personal-trainer/personal-trainer-create/personal-trainer-create.component";
import { InstructureCreateComponent } from "./instructure/instructure-create/instructure-create.component";
import { ScheduleCreateComponent } from "./schedule/schedule-create/schedule-create.component";
import { PaymentTypeCreateComponent } from "./payment-type/payment-type-create/payment-type-create.component";
import { MemberTypeCreateComponent } from "./member-type/member-type-create/member-type-create.component";
import { BenefitCreateComponent } from "./benefit/benefit-create/benefit-create.component";
import { DropinCompanyCreateComponent } from "./dropin-company/dropin-company-create/dropin-company-create.component";
import { PriceCreateComponent } from "./price/price-create/price-create.component";
import { ClubBenefitCreateComponent } from "./club-benefit/club-benefit-create/club-benefit-create.component";
import { HealthQuestionsListComponent } from "./health-questions/health-questions-list/health-questions-list.component";
import { HealthQuestionsFormComponent } from "./health-questions/health-questions-form/health-questions-form.component";
import { HealthQuestionsCreateComponent } from "./health-questions/health-questions-create/health-questions-create.component";
import { BankListComponent } from "./bank/bank-list/bank-list.component";
import { BankFormComponent } from "./bank/bank-form/bank-form.component";
import { BankCreateComponent } from "./bank/bank-create/bank-create.component";
import { BranchListComponent } from "./branch/branch-list/branch-list.component";
import { BranchFormComponent } from "./branch/branch-form/branch-form.component";
import { BranchCreateComponent } from "./branch/branch-create/branch-create.component";
import { PositionListComponent } from './position/position-list/position-list.component';
import { PositionFormComponent } from './position/position-form/position-form.component';
import { PositionCreateComponent } from './position/position-create/position-create.component';

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
    InstructureListComponent,
    ScheduleFormComponent,
    ScheduleListComponent,
    PaymentTypeFormComponent,
    PaymentTypeListComponent,
    MemberTypeFormComponent,
    MemberTypeListComponent,
    PriceFormComponent,
    PriceListComponent,
    BenefitFormComponent,
    BenefitListComponent,
    ClubBenefitFormComponent,
    ClubBenefitListComponent,
    DropinCompanyFormComponent,
    DropinCompanyListComponent,
    UserFormComponent,
    UserCreateComponent,
    RoleCreateComponent,
    RolePermissionComponent,
    PermissionCreateComponent,
    PersonalTrainerCreateComponent,
    InstructureCreateComponent,
    ScheduleCreateComponent,
    PaymentTypeCreateComponent,
    MemberTypeCreateComponent,
    BenefitCreateComponent,
    DropinCompanyCreateComponent,
    PriceCreateComponent,
    ClubBenefitCreateComponent,
    HealthQuestionsListComponent,
    HealthQuestionsFormComponent,
    HealthQuestionsCreateComponent,
    BankListComponent,
    BankFormComponent,
    BankCreateComponent,
    BranchListComponent,
    BranchFormComponent,
    BranchCreateComponent,
    PositionListComponent,
    PositionFormComponent,
    PositionCreateComponent
  ]
})
export class MasterModule {}

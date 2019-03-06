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
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

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
    InstructureListComponent
  ]
})
export class MasterModule {}

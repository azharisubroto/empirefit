import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxPaginationModule } from "ngx-pagination";

import { SharedComponentsModule } from "src/app/shared/components/shared-components.module";
import { FormWizardModule } from "src/app/shared/components/form-wizard/form-wizard.module";
import { TextMaskModule } from "angular2-text-mask";

import { MasterRoutingModule } from "./master-routing.module";
import { UserListComponent } from "./user/user-list/user-list.component";
import { RoleCreateComponent } from "./role/role-create/role-create.component";
import { RoleListComponent } from "./role/role-list/role-list.component";
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
  declarations: [UserListComponent, RoleCreateComponent, RoleListComponent]
})
export class MasterModule {}

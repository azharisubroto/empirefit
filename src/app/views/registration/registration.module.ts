import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxPaginationModule } from "ngx-pagination";
import { FormWizardModule } from "src/app/shared/components/form-wizard/form-wizard.module";

import { RegistrationRoutingModule } from "./registration-routing.module";
import { RegistrationFormComponent } from "./registration-form/registration-form.component";
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
    FormWizardModule,
    RegistrationRoutingModule
  ],
  declarations: [RegistrationFormComponent]
})
export class RegistrationModule {}

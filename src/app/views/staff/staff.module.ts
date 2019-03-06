import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxPaginationModule } from "ngx-pagination";
import { CustomFormsModule } from "ng2-validation";
import { TagInputModule } from "ngx-chips";

import { StaffRoutingModule } from "./staff-routing.module";
import { StaffListComponent } from "./staff-list/staff-list.component";
import { StaffRegistrationComponent } from "./staff-registration/staff-registration.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { ImageCropperModule } from "ngx-img-cropper";
import { SharedComponentsModule } from "src/app/shared/components/shared-components.module";
import { FormWizardModule } from "src/app/shared/components/form-wizard/form-wizard.module";
import { TextMaskModule } from "angular2-text-mask";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxDatatableModule,
    NgbModule,
    StaffRoutingModule,
    ImageCropperModule,
    TextMaskModule,
    FormWizardModule,
    TagInputModule,
    CustomFormsModule,
    SharedComponentsModule
  ],
  declarations: [StaffListComponent, StaffRegistrationComponent]
})
export class StaffModule {}

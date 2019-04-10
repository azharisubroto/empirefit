import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxPaginationModule } from "ngx-pagination";

import { MemberPartnerRoutingModule } from "./member-partner-routing.module";
import { MemberPartnerComponent } from "./member-partner-list/member-partner-list.component";
import { MemberPartnerCreateComponent } from './member-partner-create/member-partner-create.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MemberPartnerFormComponent } from './member-partner-form/member-partner-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxDatatableModule,
    NgbModule,
    MemberPartnerRoutingModule
  ],
  declarations: [MemberPartnerComponent, MemberPartnerCreateComponent, MemberPartnerFormComponent]
})
export class MemberPartnerModule {}

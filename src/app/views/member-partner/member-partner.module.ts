import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxPaginationModule } from "ngx-pagination";
import { SignaturePadModule } from "angular2-signaturepad";

import { MemberPartnerRoutingModule } from "./member-partner-routing.module";
import { MemberPartnerComponent } from "./member-partner-list/member-partner-list.component";
import { MemberPartnerCreateComponent } from './member-partner-create/member-partner-create.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MemberPartnerFormComponent } from './member-partner-form/member-partner-form.component';
import { NotFoundSignComponent } from './not-found-sign/not-found-sign.component';
import { MemberPartnerSignComponent } from './member-partner-sign/member-partner-sign.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxDatatableModule,
    SignaturePadModule,
    NgbModule,
    MemberPartnerRoutingModule
  ],
  declarations: [MemberPartnerComponent, MemberPartnerCreateComponent, MemberPartnerFormComponent, NotFoundSignComponent, MemberPartnerSignComponent]
})
export class MemberPartnerModule { }

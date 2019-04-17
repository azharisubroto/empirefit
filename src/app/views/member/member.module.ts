import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxPaginationModule } from "ngx-pagination";

import { MemberRoutingModule } from "./member-routing.module";
import { MemberComponent } from "./member-list/member-list.component";
import { MemberEditComponent } from "./member-edit/member-edit.component";
import { MemberAttendanceComponent } from "./member-attendance/member-attendance.component";
import { MemberLeaveComponent } from "./member-leave/member-leave.component";
import { MemberActivationComponent } from "./member-activation/member-activation.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedComponentsModule } from "src/app/shared/components/shared-components.module";

import { FormWizardModule } from "src/app/shared/components/form-wizard/form-wizard.module";
import { TextMaskModule } from "angular2-text-mask";
import { MemberActivationSuccessComponent } from "./member-activation-success/member-activation-success.component";
import { WebcamModule } from "ngx-webcam";
import { SignaturePadModule } from "angular2-signaturepad";
import { PtSessionComponent } from './pt-session/pt-session.component';
import { MemberPackageComponent } from './member-package/member-package.component';
import { MemberAutodebitComponent } from './member-autodebit/member-autodebit.component';
import { MemberChangeCcComponent } from './member-change-cc/member-change-cc.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxDatatableModule,
    NgbModule,
    WebcamModule,
    SharedComponentsModule,
    MemberRoutingModule,
    FormWizardModule,
    TextMaskModule,
    SignaturePadModule
  ],
  declarations: [
    MemberComponent,
    MemberEditComponent,
    MemberAttendanceComponent,
    MemberLeaveComponent,
    MemberActivationComponent,
    MemberActivationSuccessComponent,
    PtSessionComponent,
    MemberPackageComponent,
    MemberAutodebitComponent,
    MemberChangeCcComponent
  ]
})
export class MemberModule {}

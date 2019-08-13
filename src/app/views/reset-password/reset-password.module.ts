import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { ResetComponent } from './reset/reset.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    ResetPasswordRoutingModule
  ],
  declarations: [ResetComponent]
})
export class ResetPasswordModule { }

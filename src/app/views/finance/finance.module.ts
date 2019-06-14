import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxPaginationModule } from "ngx-pagination";

import { FinanceRoutingModule } from "./finance-routing.module";
import { TransactionListComponent } from "./transaction-list/transaction-list.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { TransactionReportComponent } from './transaction-report/transaction-report.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxDatatableModule,
    NgbModule,
    FinanceRoutingModule
  ],
  declarations: [TransactionListComponent, TransactionFormComponent, TransactionReportComponent]
})
export class FinanceModule { }

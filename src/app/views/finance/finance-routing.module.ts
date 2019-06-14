import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TransactionListComponent } from "./transaction-list/transaction-list.component";
import { TransactionFormComponent } from "./transaction-form/transaction-form.component";
import { TransactionReportComponent } from "./transaction-report/transaction-report.component";

const routes: Routes = [
  {
    path: "",
    component: TransactionListComponent
  },
  {
    path: "recurring-report",
    component: TransactionListComponent
  },
  {
    path: "recurring-form/:id",
    component: TransactionFormComponent
  },
  {
    path: "transaction-report",
    component: TransactionReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }

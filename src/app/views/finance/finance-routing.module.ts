import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MemberListComponent } from "./member-list/member-list.component";
import { TransactionListComponent } from "./transaction-list/transaction-list.component";
import { TransactionFormComponent } from "./transaction-form/transaction-form.component";

const routes: Routes = [
  {
    path: "member-list",
    component: MemberListComponent
  },
  {
    path: "",
    component: TransactionListComponent
  },
  {
    path: "transaction-form/:id",
    component: TransactionFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule {}

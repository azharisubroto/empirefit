import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MemberPartnerComponent } from "./member-partner-list/member-partner-list.component";

const routes: Routes = [
  {
    path: "",
    component: MemberPartnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberPartnerRoutingModule {}

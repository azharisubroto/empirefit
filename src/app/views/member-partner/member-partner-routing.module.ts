import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MemberPartnerComponent } from "./member-partner-list/member-partner-list.component";
import { MemberPartnerCreateComponent } from "./member-partner-create/member-partner-create.component";

const routes: Routes = [
  {
    path: "",
    component: MemberPartnerComponent
  },
  {
    path: "member-partner-create", 
    component: MemberPartnerCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberPartnerRoutingModule {}

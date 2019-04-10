import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MemberPartnerComponent } from "./member-partner-list/member-partner-list.component";
import { MemberPartnerCreateComponent } from "./member-partner-create/member-partner-create.component";
import { MemberPartnerFormComponent } from "./member-partner-form/member-partner-form.component";

const routes: Routes = [
  {
    path: "",
    component: MemberPartnerComponent
  },
  {
    path: "member-partner-create", 
    component: MemberPartnerCreateComponent
  },
  {
    path: "member-partner-edit/:id", 
    component: MemberPartnerFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberPartnerRoutingModule {}

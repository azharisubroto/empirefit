import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MemberPartnerComponent } from "./member-partner-list/member-partner-list.component";
import { MemberPartnerCreateComponent } from "./member-partner-create/member-partner-create.component";
import { MemberPartnerFormComponent } from "./member-partner-form/member-partner-form.component";
import { NotFoundSignComponent } from "./not-found-sign/not-found-sign.component";
import { MemberPartnerSignComponent } from "./member-partner-sign/member-partner-sign.component";

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
  },
  {
    path: "not-found-sign",
    component: NotFoundSignComponent
  },
  {
    path: "signed-form/:id",
    component: MemberPartnerSignComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberPartnerRoutingModule { }

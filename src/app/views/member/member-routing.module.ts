import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MemberComponent } from "./member-list/member-list.component";

const routes: Routes = [
  {
    path: "",
    component: MemberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule {}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./shared/inmemory-db/inmemory-db.service";
import { HttpClientModule } from "@angular/common/http";
import { DataTablesModule } from "angular-datatables";
import { MemberActivationSuccessComponent } from './member/member-activation-success/member-activation-success.component';

@NgModule({
  declarations: [AppComponent, MemberActivationSuccessComponent],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    DataTablesModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {
      passThruUnknownUrl: true
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

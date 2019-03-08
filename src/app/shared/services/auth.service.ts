import { Injectable } from "@angular/core";
import { LocalStoreService } from "./local-store.service";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { delay } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  //Only for demo purpose
  authenticated;
  readonly apiURL = "http://localhost/efc/api";

  constructor(
    private store: LocalStoreService,
    private router: Router,
    private http: HttpClient
  ) {
    this.checkAuth();
  }

  checkAuth() {
    this.authenticated = this.store.getItem("access_token");
  }

  getuser() {
    return of({});
  }

  signin(credentials) {
    this.http
      .post(this.apiURL + "/login", credentials)
      .subscribe((data: any) => {
        if (data.status === "200") {
          this.store.setItem("access_token", data.access_token);
          this.router.navigateByUrl("/dashboard");
          return of({}).pipe(delay(1500));
        } else {
          this.router.navigateByUrl("/sessions/signin");
          return of({}).pipe(delay(1500));
        }
      });
  }

  signout() {
    this.store.clear();
    this.router.navigateByUrl("/sessions/signin");
  }
}

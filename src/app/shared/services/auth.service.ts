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
  readonly apiURL = "http://45.118.132.77/api";
  // readonly apiURL = "http://localhost/efc/api";

  constructor(
    private store: LocalStoreService,
    private router: Router,
    private http: HttpClient
  ) {
    this.checkAuth();
  }

  checkAuth() {
    return (this.authenticated = this.store.getItem("access_token"));
  }

  getuser() {
    return of({});
  }

  signin(credentials) {
    return this.http.post(this.apiURL + "/login", credentials).pipe(delay(300));
  }

  signout() {
    this.store.clear();
    this.router.navigateByUrl("/sessions/signin");
  }
}

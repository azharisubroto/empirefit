import { Injectable } from "@angular/core";
import { LocalStoreService } from "./local-store.service";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { delay } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  //Only for demo purpose
  authenticated;
  redirect;
  readonly apiURL = "https://api.empirefit.club/api";
  // readonly apiURL = "http://localhost/efc/api";

  constructor(
    private store: LocalStoreService,
    private router: Router,
    private http: HttpClient
  ) {
    this.checkAuth();
    this.getuser();
  }

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  checkAuth() {
    this.authenticated = this.store.getItem("access_token");
  }

  getuser() {
    return this.http.get(this.apiURL + "/get_user", this.httpOptions);
  }

  signin(credentials) {
    return this.http.post(this.apiURL + "/login", credentials).pipe(delay(300));
  }

  signout() {
    this.store.clear();
    this.router.navigateByUrl("/sessions/signin");
  }

  checkAccess() {
    this.http
      .get(this.apiURL + "/check_access", this.httpOptions)
      .toPromise()
      .then(res => res)
      .catch(err => {
        if (err.status === 401) {
          this.store.clear();
          this.router.navigateByUrl("sessions/signin");
        }
      });
  }
}

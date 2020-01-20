import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class LogService {
  readonly apiURL = "https://api.empirefit.club/api";
  readonly localurl = "http://localhost/empire-fit-club/efc_api/api";
  //readonly apiURL = "http://localhost/efc_api/api";

  constructor(private http: HttpClient, private store: LocalStoreService) { }

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  getLogs() {
    return this.http.get(this.apiURL + "/log_update_member", this.httpOptions);
  }
}

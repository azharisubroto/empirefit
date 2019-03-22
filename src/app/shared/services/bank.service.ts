import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";
import { Response } from "@angular/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class BankService {
  readonly apiURL = "http://45.118.132.77/api";
  // readonly apiURL = "http://localhost/efc/api";
  error;

  constructor(
    private http: HttpClient,
    private store: LocalStoreService,
    private router: Router
  ) {}

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  getBanks() {
    return this.http.get(this.apiURL + "/banks", this.httpOptions);
  }

  createBank(data) {
    return this.http.post(this.apiURL + "/banks", data, this.httpOptions);
  }

  deleteBank(id) {
    return this.http.delete(this.apiURL + "/banks/" + id, this.httpOptions);
  }

  showBank(id) {
    return this.http.get(this.apiURL + "/banks/" + id, this.httpOptions);
  }

  updateBank(id, data) {
    return this.http.put(this.apiURL + "/banks/" + id, data, this.httpOptions);
  }
}

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class DropinCompanyService {
  readonly apiURL = "http://45.118.132.77/api";
  // readonly apiURL = "http://localhost/efc/api";

  constructor(private http: HttpClient, private store: LocalStoreService) {}

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  getDropinCompanies() {
    return this.http.get(this.apiURL + "/dropin_companies", this.httpOptions);
  }

  createDropinCompany(data) {
    return this.http.post(
      this.apiURL + "/dropin_companies",
      data,
      this.httpOptions
    );
  }

  deleteDropinCompany(id) {
    return this.http.delete(
      this.apiURL + "/dropin_companies/" + id,
      this.httpOptions
    );
  }

  showDropinCompany(id) {
    return this.http.get(
      this.apiURL + "/dropin_companies/" + id,
      this.httpOptions
    );
  }

  updateDropinCompany(id, data) {
    return this.http.put(
      this.apiURL + "/dropin_companies/" + id,
      data,
      this.httpOptions
    );
  }
}

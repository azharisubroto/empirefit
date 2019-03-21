import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class BenefitService {
  readonly apiURL = "http://45.118.132.77/api";
  // readonly apiURL = "http://localhost/efc/api";

  constructor(private http: HttpClient, private store: LocalStoreService) {}

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  getBenefits() {
    return this.http.get(this.apiURL + "/benefits", this.httpOptions);
  }

  createBenefit(data) {
    return this.http.post(this.apiURL + "/benefits", data, this.httpOptions);
  }

  deleteBenefit(id) {
    return this.http.delete(this.apiURL + "/benefits/" + id, this.httpOptions);
  }

  showBenefit(id) {
    return this.http.get(this.apiURL + "/benefits/" + id, this.httpOptions);
  }

  updateBenefit(id, data) {
    return this.http.put(
      this.apiURL + "/benefits/" + id,
      data,
      this.httpOptions
    );
  }

  updateBenefitMember(id, data) {
    return this.http.put(
      this.apiURL + "/benefits_member/" + id,
      data,
      this.httpOptions
    );
  }
}

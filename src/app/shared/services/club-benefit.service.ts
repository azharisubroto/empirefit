import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class ClubBenefitService {
  readonly apiURL = "https://api.empirefit.club/api";
  // readonly apiURL = "http://localhost/efc/api";

  constructor(private http: HttpClient, private store: LocalStoreService) {}

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  getClubBenefits() {
    return this.http.get(this.apiURL + "/club_benefits", this.httpOptions);
  }

  createClubBenefit(data) {
    return this.http.post(
      this.apiURL + "/club_benefits",
      data,
      this.httpOptions
    );
  }

  deleteClubBenefit(id) {
    return this.http.delete(
      this.apiURL + "/club_benefits/" + id,
      this.httpOptions
    );
  }

  showClubBenefit(id) {
    return this.http.get(
      this.apiURL + "/club_benefits/" + id,
      this.httpOptions
    );
  }

  updateClubBenefit(id, data) {
    return this.http.put(
      this.apiURL + "/club_benefits/" + id,
      data,
      this.httpOptions
    );
  }
}

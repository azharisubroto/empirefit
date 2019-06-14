import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class PersonaltrainerService {
  readonly apiURL = "https://api.empirefit.club/api";
  // readonly apiURL = "http://localhost/efc/api";

  constructor(private http: HttpClient, private store: LocalStoreService) { }

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  getPersonalTrainers() {
    return this.http.get(this.apiURL + "/personaltrainers", this.httpOptions);
  }

  createPersonalTrainer(data) {
    return this.http.post(
      this.apiURL + "/personaltrainers",
      data,
      this.httpOptions
    );
  }

  deletePersonalTrainer(id) {
    return this.http.delete(
      this.apiURL + "/personaltrainers/" + id,
      this.httpOptions
    );
  }

  showPersonalTrainer(id) {
    return this.http.get(
      this.apiURL + "/personaltrainers/" + id,
      this.httpOptions
    );
  }

  updatePersonalTrainer(id, data) {
    return this.http.put(
      this.apiURL + "/personaltrainers/" + id,
      data,
      this.httpOptions
    );
  }

  personalTrainerMember(id) {
    return this.http.get(
      this.apiURL + "/personal_trainer_members/" + id,
      this.httpOptions
    );
  }

  fingerPt(id, vc) {
    return this.http.get(
      this.apiURL + "/get_url_finger_pt/" + id + "/" + vc,
      this.httpOptions
    );
  }
}

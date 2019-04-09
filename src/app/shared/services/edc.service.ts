import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class EdcService {
  readonly apiURL = "https://api.empirefit.club/api";
  // readonly apiURL = "http://localhost/efc/api";

  constructor(private http: HttpClient, private store: LocalStoreService) { }

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  getEdcs() {
    return this.http.get(this.apiURL + "/edc", this.httpOptions);
  }

  createEdc(data) {
    return this.http.post(this.apiURL + "/edc", data, this.httpOptions);
  }

  deleteEdc(id) {
    return this.http.delete(this.apiURL + "/edc/" + id, this.httpOptions);
  }

  showEdc(id) {
    return this.http.get(this.apiURL + "/edc/" + id, this.httpOptions);
  }

  getEdcByBranch(branch_id) {
    return this.http.get(this.apiURL + "/edcByBranch/" + branch_id, this.httpOptions);
  }

  updateEdc(id, data) {
    return this.http.put(
      this.apiURL + "/edc/" + id,
      data,
      this.httpOptions
    );
  }
}

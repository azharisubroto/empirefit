import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class InstructureService {
  readonly apiURL = "http://45.118.132.77/api";
  // readonly apiURL = "http://localhost/efc/api";

  constructor(private http: HttpClient, private store: LocalStoreService) {}

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  getInstructures() {
    return this.http.get(this.apiURL + "/instructures", this.httpOptions);
  }

  createInstructure(data) {
    return this.http.post(
      this.apiURL + "/instructures",
      data,
      this.httpOptions
    );
  }

  deleteInstructure(id) {
    return this.http.delete(
      this.apiURL + "/instructures/" + id,
      this.httpOptions
    );
  }

  showInstructure(id) {
    return this.http.get(this.apiURL + "/instructures/" + id, this.httpOptions);
  }

  updateInstructure(id, data) {
    return this.http.put(
      this.apiURL + "/instructures/" + id,
      data,
      this.httpOptions
    );
  }
}

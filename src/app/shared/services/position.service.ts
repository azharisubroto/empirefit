import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class PositionService {
  readonly apiURL = "http://45.118.132.77/api";
  // readonly apiURL = "http://localhost/efc/api";

  constructor(private http: HttpClient, private store: LocalStoreService) {}

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  getPositions() {
    return this.http.get(this.apiURL + "/positions", this.httpOptions);
  }

  createPosition(data) {
    return this.http.post(this.apiURL + "/positions", data, this.httpOptions);
  }

  deletePosition(id) {
    return this.http.delete(this.apiURL + "/positions/" + id, this.httpOptions);
  }

  showPosition(id) {
    return this.http.get(this.apiURL + "/positions/" + id, this.httpOptions);
  }

  updatePosition(id, data) {
    return this.http.put(
      this.apiURL + "/positions/" + id,
      data,
      this.httpOptions
    );
  }

  updateGroupPosition(id, data) {
    return this.http.put(
      this.apiURL + "/group_positions/" + id,
      data,
      this.httpOptions
    );
  }

  createGroupPosition(data) {
    return this.http.post(
      this.apiURL + "/group_positions/",
      data,
      this.httpOptions
    );
  }
}

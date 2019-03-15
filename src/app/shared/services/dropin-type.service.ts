import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class DropinTypeService {
  readonly apiURL = "http://45.118.132.77/api";
  // readonly apiURL = "http://localhost/efc/api";

  constructor(private http: HttpClient, private store: LocalStoreService) {}

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  getDropinTypes() {
    return this.http.get(this.apiURL + "/dropin_types", this.httpOptions);
  }

  createDropinType(data) {
    return this.http.post(
      this.apiURL + "/dropin_types",
      data,
      this.httpOptions
    );
  }

  deleteDropinType(id) {
    return this.http.delete(
      this.apiURL + "/dropin_types/" + id,
      this.httpOptions
    );
  }

  showDropinType(id) {
    return this.http.get(this.apiURL + "/dropin_types/" + id, this.httpOptions);
  }

  updateDropinType(id, data) {
    return this.http.put(
      this.apiURL + "/dropin_types/" + id,
      data,
      this.httpOptions
    );
  }
}

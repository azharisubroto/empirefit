import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class PackageService {
  readonly apiURL = "http://45.118.132.77/api";
  // readonly apiURL = "http://localhost/efc/api";

  constructor(private http: HttpClient, private store: LocalStoreService) {}

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  getPackages() {
    return this.http.get(this.apiURL + "/packages", this.httpOptions);
  }

  createPackage(data) {
    return this.http.post(this.apiURL + "/packages", data, this.httpOptions);
  }

  deletePackage(id) {
    return this.http.delete(this.apiURL + "/packages/" + id, this.httpOptions);
  }

  showPackage(id) {
    return this.http.get(this.apiURL + "/packages/" + id, this.httpOptions);
  }

  updatePackage(id, data) {
    return this.http.put(
      this.apiURL + "/packages/" + id,
      data,
      this.httpOptions
    );
  }
}

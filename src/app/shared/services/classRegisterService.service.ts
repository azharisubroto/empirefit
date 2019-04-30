import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class ClassRegisterService {
  readonly apiURL = "https://api.empirefit.club/api";
  // readonly apiURL = "http://localhost/efc/api";

  constructor(private http: HttpClient, private store: LocalStoreService) { }

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  getClassRegistrations() {
    return this.http.get(
      this.apiURL + "/class_registrations",
      this.httpOptions
    );
  }

  registerClass(data) {
    return this.http.post(
      this.apiURL + "/class_registrations",
      data,
      this.httpOptions
    );
  }

  searchClass(data) {
    return this.http.post(
      this.apiURL + "/search_class_registration",
      data,
      this.httpOptions
    );
  }

  search(data) {
    return this.http.post(
      this.apiURL + "/search_class",
      data,
      this.httpOptions
    );
  }

  viewClass(data) {
    return this.http.post(
      this.apiURL + "/view_class",
      data,
      this.httpOptions
    );
  }
}

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class UserService {
  readonly apiURL = "http://45.118.132.77/api";

  constructor(private http: HttpClient, private store: LocalStoreService) {}

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  showUser(id) {
    return this.http.get(this.apiURL + "/users/" + id, this.httpOptions);
  }

  getUsers() {
    return this.http.get(this.apiURL + "/users", this.httpOptions);
  }

  updateUser(id, data) {
    return this.http.put(this.apiURL + "/users/" + id, data, this.httpOptions);
  }

  createUser(data) {
    return this.http.post(this.apiURL + "/users", data, this.httpOptions);
  }
}

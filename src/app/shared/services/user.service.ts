import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class UserService {
  readonly apiURL = "https://api.empirefit.club/api";
  // readonly apiURL = "http://localhost/efc/api";

  constructor(private http: HttpClient, private store: LocalStoreService) { }

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

  getSingleUser() {
    return this.http.get(this.apiURL + "/get_user", this.httpOptions);
  }

  userCheckPassword(id, data) {
    return this.http.post(this.apiURL + "/check_password/" + id, data, this.httpOptions);
  }

  updateUser(id, data) {
    return this.http.put(this.apiURL + "/users/" + id, data, this.httpOptions);
  }

  createUser(data) {
    return this.http.post(this.apiURL + "/users", data, this.httpOptions);
  }

  deleteUser(id) {
    return this.http.delete(this.apiURL + "/users/" + id, this.httpOptions);
  }

  resetPassword(data) {
    return this.http.post(this.apiURL + "/reset_password", data, this.httpOptions);
  }
}

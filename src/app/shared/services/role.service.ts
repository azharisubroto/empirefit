import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class RoleService {
  readonly apiURL = "http://45.118.132.77/api";
  // readonly apiURL = "http://localhost/efc/api";

  constructor(private http: HttpClient, private store: LocalStoreService) {}

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  getRoles() {
    return this.http.get(this.apiURL + "/roles/", this.httpOptions);
  }

  createRole(data) {
    return this.http.post(this.apiURL + "/roles", data, this.httpOptions);
  }

  deleteRole(id) {
    return this.http.delete(this.apiURL + "/roles/" + id, this.httpOptions);
  }

  showRole(id) {
    return this.http.get(this.apiURL + "/roles/" + id, this.httpOptions);
  }

  updateRole(id, data) {
    return this.http.put(this.apiURL + "/roles/" + id, data, this.httpOptions);
  }

  getPermissions(id) {
    return this.http.get(this.apiURL + "/permission_role/" + id, this.httpOptions);
  }
}

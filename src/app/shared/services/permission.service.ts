import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class PermissionService {
  readonly apiURL = "http://45.118.132.77/api";
  // readonly apiURL = "http://localhost/efc/api";

  constructor(private http: HttpClient, private store: LocalStoreService) {}

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  getPermissions() {
    return this.http.get(this.apiURL + "/permissions", this.httpOptions);
  }

  createPermission(data) {
    return this.http.post(this.apiURL + "/permissions", data, this.httpOptions);
  }

  deletePermission(id) {
    return this.http.delete(
      this.apiURL + "/permissions/" + id,
      this.httpOptions
    );
  }

  showPermission(id) {
    return this.http.get(this.apiURL + "/permissions/" + id, this.httpOptions);
  }

  updatePermission(id, data) {
    return this.http.put(
      this.apiURL + "/permissions/" + id,
      data,
      this.httpOptions
    );
  }

  createPermissionRole(id, data) {
    return this.http.post(
      this.apiURL + "/store_permission_role/" + id,
      data,
      this.httpOptions
    );
  }

  permission_role(id) {
    return this.http.get(
      this.apiURL + "/permission_role/" + id,
      this.httpOptions
    );
  }
}

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class DeviceService {
  readonly apiURL = "https://api.empirefit.club/api";
  // readonly apiURL = "http://localhost/efc/api";

  constructor(private http: HttpClient, private store: LocalStoreService) { }

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  getDevices() {
    return this.http.get(this.apiURL + "/devices", this.httpOptions);
  }

  createDevice(data) {
    return this.http.post(this.apiURL + "/devices", data, this.httpOptions);
  }

  deleteDevice(id) {
    return this.http.delete(this.apiURL + "/devices/" + id, this.httpOptions);
  }

  showDevice(id) {
    return this.http.get(this.apiURL + "/devices/" + id, this.httpOptions);
  }

  getByBranch(branch_id) {
    return this.http.get(this.apiURL + "/devices_branch/" + branch_id, this.httpOptions);
  }

  updateDevice(id, data) {
    return this.http.put(
      this.apiURL + "/devices/" + id,
      data,
      this.httpOptions
    );
  }
}

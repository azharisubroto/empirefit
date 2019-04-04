import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class StaffService {
  readonly apiURL = "https://api.empirefit.club/api";
  // readonly apiURL = "http://localhost/efc/api";

  constructor(private http: HttpClient, private store: LocalStoreService) { }

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  getStaffs() {
    return this.http.get(this.apiURL + "/staff/", this.httpOptions);
  }

  createStaff(data) {
    return this.http.post(this.apiURL + "/staff", data, this.httpOptions);
  }

  deleteStaff(id) {
    return this.http.delete(this.apiURL + "/staff/" + id, this.httpOptions);
  }

  showStaff(id) {
    return this.http.get(this.apiURL + "/staff/" + id, this.httpOptions);
  }

  updateStaff(id, data) {
    return this.http.put(this.apiURL + "/staff/" + id, data, this.httpOptions);
  }

  getStaffCoach() {
    return this.http.get(this.apiURL + "/staff_coach/", this.httpOptions);
  }

  getStaffPt() {
    return this.http.get(this.apiURL + "/staff_pt/", this.httpOptions);
  }

  updatePhoto(id, data) {
    return this.http.post(this.apiURL + "/staff_photo/" + id, data, this.httpOptions);
  }
}

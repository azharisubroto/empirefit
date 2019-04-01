import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class FingerService {
  readonly apiURL = "https://api.empirefit.club/api";
  // readonly apiURL = "http://localhost/efc/api";

  constructor(private http: HttpClient, private store: LocalStoreService) {}

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  checkStaffRegistration(id) {
    return this.http.get(
      this.apiURL + "/finger/staff_registration/check/" + id
    );
  }

  checkMemberRegistration(id) {
    return this.http.get(this.apiURL + "/finger/registration/check/" + id);
  }

  classAttendance(id) {
    return this.http.get(this.apiURL + "/finger/member_auto_attendance/" + id);
  }
}

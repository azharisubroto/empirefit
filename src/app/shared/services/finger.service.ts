import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class FingerService {
  readonly apiURL = "https://api.empirefit.club/api";
  // readonly localURL = "http://45.118.132.77/efc/api";

  constructor(private http: HttpClient, private store: LocalStoreService) { }

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  checkStaffRegistration(id) {
    return this.http.get(
      this.apiURL + "/finger/staff_registrations/check/" + id
    );
  }

  checkMemberRegistration(id, vc) {
    return this.http.get(this.apiURL + "/finger/registrations/check/" + id + "/" + vc);
  }

  classAttendance(id) {
    return this.http.get(this.apiURL + "/finger/member_auto_attendance/" + id);
  }

  // Auto Attendance
  checkAttendance(member_id) {
    return this.http.get(this.apiURL + "/finger/member_attendance/check/" + member_id, this.httpOptions);
  }

  // Auto Registration
  checkAutoRegClass(member_id, data) {
    return this.http.post(this.apiURL + "/finger/member_register_class/check/" + member_id, data, this.httpOptions);
  }

  //  Pt Attendance
  checkPtAttendance(member_id) {
    return this.http.get(this.apiURL + "/finger/member_pt_attendance/check/" + member_id);
  }

  //  Pt Attendance
  checkPtAttendance2(pt_id) {
    return this.http.get(this.apiURL + "/finger/pt_attendance/check/" + pt_id);
  }

  checkStaffAttendance(staff_id, data) {
    return this.http.post(this.apiURL + "/finger/staff_attendance/check/" + staff_id, data, this.httpOptions);
  }

  checkStaffAttendanceOut(staff_id, data) {
    return this.http.post(this.apiURL + "/finger/staff_attendance_out/check/" + staff_id, data, this.httpOptions);
  }
}

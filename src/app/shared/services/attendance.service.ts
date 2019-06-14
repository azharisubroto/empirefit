import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class AttendanceService {
  readonly apiURL = "https://api.empirefit.club/api";
  // readonly apiURL = "http://localhost/efc/api";

  constructor(private http: HttpClient, private store: LocalStoreService) {}

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  createAttendance(data) {
    return this.http.post(
      this.apiURL + "/class_attendances/",
      data,
      this.httpOptions
    );
  }

  attendanceHistory(member_id) {
    return this.http.get(
      this.apiURL + "/class_attendance/" + member_id,
      this.httpOptions
    );
  }

  trainerCheckin(data) {
    return this.http.post(
      this.apiURL + "/member_attendances/",
      data,
      this.httpOptions
    );
  }

  trainerHistory( member_id ) {
    return this.http.get(
      this.apiURL + "/personal_trainer_members/" + member_id,
      this.httpOptions
    );
  }
}

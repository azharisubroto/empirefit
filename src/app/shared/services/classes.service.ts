import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class ClassesService {
  readonly apiURL = "http://45.118.132.77/api";
  // readonly apiURL = "http://localhost/efc/api";

  constructor(private http: HttpClient, private store: LocalStoreService) {}

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  getClasses( member_type ) {
    return this.http.get(this.apiURL + "/show_class_registration/" + member_type, this.httpOptions);
  }

  classCheck( memberID ) {
    return this.http.get( this.apiURL + "/class_registrations/" + memberID, this.httpOptions );
  }

  classCheckIn( data ) {
    return this.http.post( this.apiURL + "/class_registrations/", data, this.httpOptions );
  }

//   createSchedule(data) {
//     return this.http.post(this.apiURL + "/schedules", data, this.httpOptions);
//   }

//   deleteSchedule(id) {
//     return this.http.delete(this.apiURL + "/schedules/" + id, this.httpOptions);
//   }

//   showSchedule(id) {
//     return this.http.get(this.apiURL + "/schedules/" + id, this.httpOptions);
//   }

//   updateSchedule(id, data) {
//     return this.http.put(
//       this.apiURL + "/schedules/" + id,
//       data,
//       this.httpOptions
//     );
//   }
}

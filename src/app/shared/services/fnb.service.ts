import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class FnbService {
  readonly apiURL = "https://api.empirefit.club/api";
  // readonly apiURL = "http://localhost/efc/api";

  constructor(private http: HttpClient, private store: LocalStoreService) { }

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  getAll() {
    return this.http.get(this.apiURL + "/fnb", this.httpOptions);
  }

  getByMember(member_id) {
    return this.http.get(this.apiURL + "/fnb/getbymember/" + member_id, this.httpOptions);
  }

  payNow(data) {
    return this.http.post(this.apiURL + "/fnb/paynow", data, this.httpOptions);
  }

  payLater(data) {
    return this.http.post(this.apiURL + "/fnb/paylater", data, this.httpOptions);
  }

  update(member_id, data) {
    return this.http.put(this.apiURL + "/fnb/update/" + member_id, data, this.httpOptions);
  }

  show(fnb_id) {
    return this.http.get(this.apiURL + "/fnb/show/" + fnb_id, this.httpOptions);
  }

  delete(fnb_id) {
    return this.http.delete(this.apiURL + "/fnb/destroy/" + fnb_id, this.httpOptions);
  }
}

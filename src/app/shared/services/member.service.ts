import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Member } from "../models/member.model";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class MemberService {
  readonly apiURL = "https://api.empirefit.club/api";
  // readonly apiURL = "http://localhost/efc/api";

  constructor(private http: HttpClient, private store: LocalStoreService) {}

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  getMember() {
    return this.http.get(this.apiURL + "/members", this.httpOptions);
  }

  updateMember(id, data) {
    return this.http.put(
      this.apiURL + "/members/" + id,
      data,
      this.httpOptions
    );
  }

  updateLiability(id, data) {
    return this.http.put(
      this.apiURL + "/update_liability/" + id,
      data,
      this.httpOptions
    );
  }

  createAutoDebet(credit_card_id, data) {
    return this.http.put(
      this.apiURL + "/auto_debet/" + credit_card_id,
      data,
      this.httpOptions
    );
  }

  getSingleMember($id) {
    return this.http.get(this.apiURL + "/members/" + $id, this.httpOptions);
  }
}

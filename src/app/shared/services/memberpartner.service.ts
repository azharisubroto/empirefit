import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Member } from "../models/member.model";
import { LocalStoreService } from "./local-store.service";
import { identity } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MemberPartnerService {
  readonly apiURL = "https://api.empirefit.club/api";
  // readonly apiURL = "http://localhost/efc/api";

  constructor(private http: HttpClient, private store: LocalStoreService) { }

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  showAll() {
    return this.http.get(this.apiURL + "/member_partners/", this.httpOptions);
  }

  getDropinCompanies() {
    return this.http.get(this.apiURL + "/dropin_companies", this.httpOptions);
  }

  createMemberPartner(data) {
    return this.http.post(
      this.apiURL + "/member_partners",
      data,
      this.httpOptions
    );
  }

  getSingleMemberPartner(id) {
    return this.http.get(this.apiURL + "/member_partners/" + id, this.httpOptions);
  }

  updateMemberPartner(id, data) {
    return this.http.put(
      this.apiURL + "/member_partners/" + id,
      data,
      this.httpOptions
    );
  }

  memberPartnerCheckIn(id, data) {
    return this.http.put(
      this.apiURL + "/member_partners/used/" + id,
      data,
      this.httpOptions
    );
  }

  searchMemberPartner(data) {
    return this.http.post(
      this.apiURL + "/search_member_partner",
      data,
      this.httpOptions
    );
  }

  checkSign(phone, data) {
    return this.http.put(
      this.apiURL + "/mp_check_sign/" + phone, data,
      this.httpOptions
    );
  }

  updateLiability(phone, data) {
    return this.http.put(
      this.apiURL + "/member_partner/update_liability/" + phone, data, this.httpOptions
    );
  }

  //   updateMember(id, data) {
  //     return this.http.put(
  //       this.apiURL + "/members/" + id,
  //       data,
  //       this.httpOptions
  //     );
  //   }

  //   updateLiability(id, data) {
  //     return this.http.put(
  //       this.apiURL + "/update_liability/" + id,
  //       data,
  //       this.httpOptions
  //     );
  //   }

  //   updateIdentification(id, data) {
  //     return this.http.put(
  //       this.apiURL + "/identification_member/" + id,
  //       data,
  //       this.httpOptions
  //     );
  //   }

  //   createAutoDebet(member_id, data) {
  //     return this.http.put(
  //       this.apiURL + "/auto_debet/" + member_id,
  //       data,
  //       this.httpOptions
  //     );
  //   }

  //   getSingleMember($id) {
  //     return this.http.get(this.apiURL + "/members/" + $id, this.httpOptions);
  //   }
}

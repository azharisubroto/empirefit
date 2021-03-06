import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Member } from "../models/member.model";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class MemberService {
  readonly apiURL = "https://api.empirefit.club/api";
  readonly localurl = "http://localhost/empire-fit-club/efc_api/api";
  //readonly apiURL = "http://localhost/efc_api/api";

  constructor(private http: HttpClient, private store: LocalStoreService) { }

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

  checkFinger(member_id, vc) {
    return this.http.get(
      this.apiURL + "/members_check_finger_status/" + member_id + "/" + vc,
      this.httpOptions
    );
  }

  getUrlFingerReg(member_id, vc) {
    return this.http.get(
      this.apiURL + "/members_get_url_finger/" + member_id + "/" + vc,
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

  updateIdentification(id, data) {
    return this.http.put(
      this.apiURL + "/identification_member/" + id,
      data,
      this.httpOptions
    );
  }

  createAutoDebet(member_id, data) {
    return this.http.put(
      this.apiURL + "/auto_debet/" + member_id,
      data,
      this.httpOptions
    );
  }

  updateStatus(member_id, data) {
    return this.http.put(
      this.apiURL + "/update_status/" + member_id, data,
      this.httpOptions
    );
  }

  updateStatusLeave(member_id, data) {
    return this.http.put(
      this.apiURL + "/update_status_leave/" + member_id, data,
      this.httpOptions
    );
  }

  getSingleMember($id) {
    return this.http.get(this.apiURL + "/members/" + $id, this.httpOptions);
  }

  memberLeave(member_id, data) {
    return this.http.put(this.apiURL + "/member_leave/" + member_id, data, this.httpOptions);
  }

  reactiveLeave(member_id, data) {
    return this.http.put(this.apiURL + "/reactive_leave/" + member_id, data, this.httpOptions);
  }

  updateMembership(member_id, data) {
    return this.http.put(
      this.apiURL + "/update_membership/" + member_id,
      data,
      this.httpOptions
    );
  }

  updatePayment(member_id, data) {
    return this.http.put(
      this.apiURL + "/update_payment/" + member_id,
      data,
      this.httpOptions
    );
  }

  deactivateCC(member_id, data) {
    return this.http.put(
      this.apiURL + "/deactivate_cc/" + member_id,
      data,
      this.httpOptions
    );
  }

  updateCC(member_id, data) {
    return this.http.put(
      this.apiURL + "/update_cc/" + member_id,
      data,
      this.httpOptions
    );
  }

  upgradeMembership(member_id, data) {
    return this.http.put(
      this.apiURL + "/upgrade_membership/" + member_id,
      data,
      this.httpOptions
    );
  }

  sendMail(member_id, data) {
    return this.http.post(this.apiURL + "/members/verified/" + member_id, data, this.httpOptions);
  }

  downloadBioLiability(member_id, data) {
    return this.http.put(this.apiURL + "/download_bio_liability/" + member_id, data, this.httpOptions);
  }

  updateDataMember(member_id, data) {
    return this.http.put(
      this.apiURL + "/update_member/" + member_id,
      data,
      this.httpOptions
    );
  }

  filter(data) {
    return this.http.post(
      this.apiURL + "/search-member",
      data,
      this.httpOptions
    );
  }
}

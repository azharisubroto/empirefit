import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Member } from "../models/member.model";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class MemberService {
  readonly apiURL = "http://45.118.132.77/api";

  constructor(private http: HttpClient, private store: LocalStoreService) {}

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  getMember() {
    return this.http.get(this.apiURL + "/members", this.httpOptions);
  }
}
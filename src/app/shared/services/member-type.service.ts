import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class MemberTypeService {
  readonly apiURL = "http://45.118.132.77/api";
  // readonly apiURL = "http://localhost/efc/api";

  constructor(private http: HttpClient, private store: LocalStoreService) {}

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  getMemberTypes() {
    return this.http.get(this.apiURL + "/member_types", this.httpOptions);
  }

  createMemberType(data) {
    return this.http.post(
      this.apiURL + "/member_types",
      data,
      this.httpOptions
    );
  }

  deleteMemberType(id) {
    return this.http.delete(
      this.apiURL + "/member_types/" + id,
      this.httpOptions
    );
  }

  showMemberType(id) {
    return this.http.get(this.apiURL + "/member_types/" + id, this.httpOptions);
  }

  updateMemberType(id, data) {
    return this.http.put(
      this.apiURL + "/member_types/" + id,
      data,
      this.httpOptions
    );
  }

  memberTypePt() {
    return this.http.get(this.apiURL + "/member_type_pt", this.httpOptions);
  }
}

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class BranchService {
  readonly apiURL = "https://api.empirefit.club/api";
  // readonly apiURL = "http://localhost/efc/api";

  constructor(private http: HttpClient, private store: LocalStoreService) {}

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  getBranches() {
    return this.http.get(this.apiURL + "/branches/", this.httpOptions);
  }

  createBranch(data) {
    return this.http.post(this.apiURL + "/branches", data, this.httpOptions);
  }

  deleteBranch(id) {
    return this.http.delete(this.apiURL + "/branches/" + id, this.httpOptions);
  }

  showBranch(id) {
    return this.http.get(this.apiURL + "/branches/" + id, this.httpOptions);
  }

  updateBranch(id, data) {
    return this.http.put(
      this.apiURL + "/branches/" + id,
      data,
      this.httpOptions
    );
  }
}

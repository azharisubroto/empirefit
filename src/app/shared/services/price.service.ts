import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class PriceService {
  readonly apiURL = "http://45.118.132.77/api";
  // readonly apiURL = "http://localhost/efc/api";

  constructor(private http: HttpClient, private store: LocalStoreService) {}

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  showPrice(id) {
    return this.http.get(this.apiURL + "/prices/" + id, this.httpOptions);
  }

  getPrices() {
    return this.http.get(this.apiURL + "/prices", this.httpOptions);
  }

  updatePrice(id, data) {
    return this.http.put(this.apiURL + "/prices/" + id, data, this.httpOptions);
  }

  createPrice(data) {
    return this.http.post(this.apiURL + "/prices", data, this.httpOptions);
  }

  deletePrice(id) {
    return this.http.delete(this.apiURL + "/prices/" + id, this.httpOptions);
  }
}

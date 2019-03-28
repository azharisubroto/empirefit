import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class PaymentTypeService {
  readonly apiURL = "https://api.empirefit.club/api";
  // readonly apiURL = "http://localhost/efc/api";

  constructor(private http: HttpClient, private store: LocalStoreService) {}

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  getPaymentTypes() {
    return this.http.get(this.apiURL + "/payment_types", this.httpOptions);
  }

  createPaymentType(data) {
    return this.http.post(
      this.apiURL + "/payment_types",
      data,
      this.httpOptions
    );
  }

  deletePaymentType(id) {
    return this.http.delete(
      this.apiURL + "/payment_types/" + id,
      this.httpOptions
    );
  }

  showPaymentType(id) {
    return this.http.get(
      this.apiURL + "/payment_types/" + id,
      this.httpOptions
    );
  }

  updatePaymentType(id, data) {
    return this.http.put(
      this.apiURL + "/payment_types/" + id,
      data,
      this.httpOptions
    );
  }
}

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";

@Injectable({
    providedIn: "root"
})
export class TransactionService {
    readonly apiURL = "https://api.empirefit.club/api";
    // readonly apiURL = "http://localhost/efc/api";

    constructor(private http: HttpClient, private store: LocalStoreService) { }

    httpOptions = {
        headers: new HttpHeaders({
            Authorization: "Bearer " + this.store.getItem("access_token")
        })
    };

    getTransactions() {
        return this.http.get(this.apiURL + "/transactions", this.httpOptions);
    }

    updateTransaction(id, data) {
        return this.http.put(this.apiURL + "/transactions/" + id, data, this.httpOptions);
    }

    showTransaction(id) {
        return this.http.get(this.apiURL + "/transactions/" + id, this.httpOptions);
    }

    searchRecurring(data) {
        return this.http.post(this.apiURL + "/search_transaction", data, this.httpOptions)
    }
}

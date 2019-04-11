import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";

@Injectable({
    providedIn: "root"
})
export class FinanceService {
    readonly apiURL = "https://api.empirefit.club/api";
    // readonly apiURL = "http://localhost/efc/api";

    constructor(private http: HttpClient, private store: LocalStoreService) { }

    httpOptions = {
        headers: new HttpHeaders({
            Authorization: "Bearer " + this.store.getItem("access_token")
        })
    };

    getRecurings() {
        return this.http.get(this.apiURL + "/recurings", this.httpOptions);
    }

    getSingleRecuring(recuring_id) {
        return this.http.get(this.apiURL + "/recurings/" + recuring_id, this.httpOptions);
    }

    searchRecuring(data) {
        return this.http.post(this.apiURL + "/recuring_search", data, this.httpOptions);
    }

    updateRecuring(recuring_id, data) {
        return this.http.post(this.apiURL + "/recurings/" + recuring_id, data, this.httpOptions);
    }

    updateRecuringManual(recuring_id, data) {
        return this.http.post(this.apiURL + "/recuring_manual_update/" + recuring_id, data, this.httpOptions);
    }

    downloadPdf(data) {
        return this.http.post(this.apiURL + "/recuring_download_pdf", data, this.httpOptions);
    }

    downloadExcel(data) {
        return this.http.post(this.apiURL + "/recuring_download_excel", data, this.httpOptions);
    }
}

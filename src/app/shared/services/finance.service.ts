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

    getAutodebits() {
        return this.http.get(this.apiURL + "/autodebits", this.httpOptions);
    }

    searchAutodebit(data) {
        return this.http.post(this.apiURL + "/autodebit_search", data, this.httpOptions);
    }

    updateAutodebit(autodebit_id, data) {
        return this.http.post(this.apiURL + "/autodebit_search/" + autodebit_id, data, this.httpOptions);
    }

    downloadPdf(data) {
        return this.http.post(this.apiURL + "/autodebit_download_pdf", data, this.httpOptions);
    }

    downloadExcel(data) {
        return this.http.post(this.apiURL + "/autodebit_download_excel", data, this.httpOptions);
    }
}

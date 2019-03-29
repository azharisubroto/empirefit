import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalStoreService } from "./local-store.service";

@Injectable({
  providedIn: "root"
})
export class HealthQuestionsService {
  readonly apiURL = "https://api.empirefit.club/api";
  // readonly apiURL = "http://localhost/efc/api";

  constructor(private http: HttpClient, private store: LocalStoreService) {}

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.store.getItem("access_token")
    })
  };

  getQuestions() {
    return this.http.get(this.apiURL + "/health_questions", this.httpOptions);
  }

  getByMember(id) {
    return this.http.get(
      this.apiURL + "/liability/getByMember/" + id,
      this.httpOptions
    );
  }

  createQuestion(data) {
    return this.http.post(
      this.apiURL + "/health_questions",
      data,
      this.httpOptions
    );
  }

  deleteQuestion(id) {
    return this.http.delete(
      this.apiURL + "/health_questions/" + id,
      this.httpOptions
    );
  }

  showQuestion(id) {
    return this.http.get(
      this.apiURL + "/health_questions/" + id,
      this.httpOptions
    );
  }

  updateQuestion(id, data) {
    return this.http.put(
      this.apiURL + "/health_questions/" + id,
      data,
      this.httpOptions
    );
  }
}

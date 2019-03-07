import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Member } from "../models/member.model";

@Injectable({
  providedIn: "root"
})
export class MemberService {
  readonly apiURL = "http://localhost/efc/api";
  readonly httpOptions = {
    headers: new HttpHeaders({
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjlmOWExZTA1MjE2ZGE0YTMzODM4YWM4ZmU5MTQzOTE5MWI1ZmEwYjg2YTA1MmM4YTczNzRkYmQ5MzliZWZlN2UzOGNiYzA3MTdkZDY2MzFmIn0.eyJhdWQiOiIxIiwianRpIjoiOWY5YTFlMDUyMTZkYTRhMzM4MzhhYzhmZTkxNDM5MTkxYjVmYTBiODZhMDUyYzhhNzM3NGRiZDkzOWJlZmU3ZTM4Y2JjMDcxN2RkNjYzMWYiLCJpYXQiOjE1NTE5Nzk2MzksIm5iZiI6MTU1MTk3OTYzOSwiZXhwIjoxNTgzNjAyMDM5LCJzdWIiOiJiY2YwODBjOS0yODY0LTQyYTUtOTk2NS0wNGE5NzM2ZmRmMzUiLCJzY29wZXMiOltdfQ.sYEzkZDTbvVlrZ84Qy3OEoCtq-U3kA1t9Qu-f7lRqCJ-3m8fDidQGx-kBp4bfe-5EZYHFof8qqRBTRrIA8YMBDCsPwOulwVtSdInh_dlxOwIz22ZkPGt07-WOhxZIx3Tuvx7r09KXZmsKWtDkAgz52dGQeVSvTZZFA1-_PvoLMEP2QvA-zhXacS31MGvYj_nOkM6_-L5HByyf0Zh3E8rQ3XfkOFCFDY99rgLSKQMXKDV4-Ucj5LK8c2oyYofJNIzPqm9NLbnfrK15ajL1URNRvsh69mvDC3eccndFi2oiPC1owxcbvcxeAX7-eZxBWONSHpruUS9BcY5kq3LSVt4XDZaEKu87UVIe9ubBhB9DfRz2LOLtM5DaOuJgLe9j4aO1qHZWP4eC1HQOzJMUm5Ugevr-L51e_7gmjh7Zcj9A6NLzOaffOfJzLVPjhoyvH2yM_Hydanj68obrWx5UowkMVAfNBTv9XYN50wdcJ-qPEh7iqN60YNKm6fhjSjKJ0Qv-cfmZX91u-CNeO2P057TW7U01RTTXx5wttHclQEF_-MwVYmpfq1n6KUTUqOyJGM3jsOnsXWFiFbA5Fv-hDzfbz9ZGRiYcFEm7VhDTAmejsbWLJ37xXAPeENcQBgCYmJ3AktwtVjTY4wwgstRIq5_pwvMkg1Oz7XLsg638dZ23CI"
    })
  };

  constructor(private http: HttpClient) {}

  getMember() {
    return this.http.get(this.apiURL + "/members", this.httpOptions);
  }
}

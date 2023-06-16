import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
@Injectable({
  providedIn: "root",
})
export class ApiService {
  // private apiUrl = "https://api.zettacamp.zetta-staging.work/graphql"
  // private token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y4MThkZGM3Njk3YjI2Yjk0YzZhZGEiLCJlbWFpbCI6InNhdHlhLmZlcmlhd2FuQHpldHRhYnl0ZS5saWZlIiwiaWF0IjoxNjg2MDIyMzQ3LCJleHAiOjE2ODYxMDg3NDd9.t3pyc7MT6VhcohympDXhL-bVM_feriDOrBXNnHDcMtQ"
  // constructor(private http: HttpClient) {}
  // apiRequest(query: string): Observable<any> {
  //   const headers = new HttpHeaders().set(
  //     "Authorization",
  //     `Bearer ${this.token}`
  //   )
  //   const body = { query }
  //   return this.http.post<any>(this.apiUrl, body, { headers })
  // }
}

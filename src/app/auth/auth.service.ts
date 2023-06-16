import { Injectable } from "@angular/core"
import { Apollo, gql } from "apollo-angular"
import { Observable, map } from "rxjs"
import { env } from "../env/env"

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private apollo: Apollo) {}
  loginUser(email: string, password: string): Observable<any> {
    return this.apollo
      .mutate({
        mutation: gql`
      mutation{
        Login(email: "${email}", password: "${password}"){
          token
        }
      }
      `,
      })
      .pipe(
        map((resp) => {
          this.userLogin(resp.data)
          return resp
        })
      )
  }
  // loginUser() {
  //   console.log("login berhasil")
  // }

  userLogin(data: any) {
    console.log(data)
    localStorage.setItem(env.tokenKey, JSON.stringify(data.Login.token))
  }

  logOut() {
    localStorage.removeItem(env.tokenKey)
  }
}

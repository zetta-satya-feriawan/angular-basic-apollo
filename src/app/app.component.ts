import { Component, OnInit } from "@angular/core"
import { ApiService } from "./api.service"
import { GET_SCHOOL } from "./graphql.operations"
import { Apollo } from "apollo-angular"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "angular-basic-apollo"

  users: any[] = []
  error: any
  constructor(private apiService: ApiService, private apollo: Apollo) {}

  ngOnInit(): void {
    // this.apollo.watchQuery({
    //   query:GET_SCHOOL
    // }).valueChanges.subscribe(({error, data}:any)=>{
    //   console.log('my data',data);
    //   this.users = data.GetAllUsers
    //   this.error = error
    // })
  }
  callApi() {
    console.log(this.users)
  }
}

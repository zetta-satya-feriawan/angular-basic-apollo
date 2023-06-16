import { Component } from "@angular/core"
import { Apollo, gql } from "apollo-angular"

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"],
})
export class UserDetailsComponent {
  displayedColumns: string[] = ["first_name", "last_name", "civility"]
  loading = false
  error: any
  users: any[] = []
  filterLastName: string = "" // Add filterLastName property and initialize it with an empty string

  constructor(private apollo: Apollo) {}

  fetchUsers(): void {
    if (this.filterLastName.length < 4) {
      alert("Please enter at least 4 characters for the last name filter.")
      return
    }

    this.loading = true

    this.apollo
      .query<any>({
        query: gql`
          query GetAllUsers($lastName: String!) {
            GetAllUsers(last_name: $lastName) {
              last_name
              first_name
              civility
              _id
            }
          }
        `,
        variables: {
          lastName: this.filterLastName,
        },
      })
      .subscribe(
        ({ data, loading, errors }) => {
          this.loading = loading
          this.error = errors ? errors[0] : null
          this.users = data ? data.GetAllUsers : []
          console.log(this.users)
        },
        (error) => {
          console.error("API Error:", error)
          this.loading = false
          this.error = error
        }
      )
  }
}

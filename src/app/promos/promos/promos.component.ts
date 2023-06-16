import { Component } from "@angular/core"
import { Router } from "@angular/router"
import { Apollo, gql } from "apollo-angular"

@Component({
  selector: "app-promos",
  templateUrl: "./promos.component.html",
  styleUrls: ["./promos.component.css"],
})
export class PromosComponent {
  promos: any[] = []
  loading = false
  error: any

  constructor(private apollo: Apollo, private router: Router) {}

  ngOnInit(): void {
    this.loading = true
    this.apollo
      .query<any>({
        query: gql`
          query {
            GetAllPromos {
              title
              ref
              sub_title
            }
          }
        `,
      })
      .subscribe(
        ({ data, loading, errors }) => {
          this.loading = loading
          this.error = errors ? errors[0] : null
          this.promos = data ? data.GetAllPromos : []
        },
        (error) => {
          console.error("API Error:", error)
          this.loading = false
          this.error = error
        }
      )
  }
  goToCreatePromo() {
    this.router.navigate(["promos/create"])
  }
}

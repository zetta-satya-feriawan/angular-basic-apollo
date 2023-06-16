import { Component, OnInit } from "@angular/core"
import { Apollo } from "apollo-angular"
import { ApiService } from "src/app/api.service"
import { GET_SCHOOL } from "src/app/graphql.operations"

@Component({
  selector: "app-school-management",
  templateUrl: "./school-management.component.html",
  styleUrls: ["./school-management.component.css"],
})
export class SchoolManagementComponent implements OnInit {
  schools: any[] = []
  error: any

  displayedColumns: string[] = ["short_name", "long_name", "status"]

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: GET_SCHOOL,
      })
      .valueChanges.subscribe(({ error, data }: any) => {
        console.log("mydata", data)
        this.schools = data.GetAllSchools
        this.error = error
      })
  }
}

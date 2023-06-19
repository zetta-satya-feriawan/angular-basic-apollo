import { Component } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { Apollo, gql } from "apollo-angular"
import Swal from "sweetalert2"

@Component({
  selector: "app-create-promo",
  templateUrl: "./create-promo.component.html",
  styleUrls: ["./create-promo.component.css"],
})
export class CreatePromoComponent {
  promoForm!: FormGroup
  loading = false

  constructor(
    private fb: FormBuilder,
    private apollo: Apollo,
    private router: Router
  ) {
    this.promoForm = this.fb.group({
      ref: ["", Validators.required],
      title: ["", Validators.required],
      subtitle: ["", Validators.required],
      description: ["", Validators.required],
    })
  }

  onSubmit(): void {
    if (this.promoForm.invalid) {
      return
    }

    this.loading = true
    const { ref, title, subtitle, description } = this.promoForm.value
    this.apollo
      .mutate<any>({
        mutation: gql`
          mutation {
            CreatePromo(
              promo_input: {
                ref: "${ref}"
                title: "${title}"
                sub_title: "${subtitle}"
                description: "${description}"
              }
            ) {
              _id
              ref
              title
            }
          }
        `,
      })
      .subscribe(
        ({ data }) => {
          this.loading = false
          Swal.fire("Success", "Promo successfully created", "success")
          this.router.navigate(["/promos"])
        },
        (error) => {
          console.error("API Error:", error)
          this.loading = false
          Swal.fire("Error", "Failed to create promo", "error")
        }
      )
  }
  fetchData() {}
}

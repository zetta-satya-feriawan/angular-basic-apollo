import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { PromosComponent } from "./promos/promos.component"
import { PromosRoutingModule } from "./promos.routing.module"
import { MatButtonModule } from "@angular/material/button"
import { MatCardModule } from "@angular/material/card"
import { MatInputModule } from "@angular/material/input"
import { MatTableModule } from "@angular/material/table"
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner"
import { FormsModule } from "@angular/forms"
import { CdkColumnDef } from "@angular/cdk/table"
import { CreatePromoComponent } from "./create-promo/create-promo.component"
import { ReactiveFormsModule } from "@angular/forms"

@NgModule({
  providers: [CdkColumnDef],
  declarations: [PromosComponent, CreatePromoComponent],
  imports: [
    CommonModule,
    PromosRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PromosModule {}

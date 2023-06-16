import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { UserDetailsComponent } from "./user-details/user-details.component"
import { UserDetailsRoutingModule } from "./user-details.routing.module"
import { MatButtonModule } from "@angular/material/button"
import { MatCardModule } from "@angular/material/card"
import { MatInputModule } from "@angular/material/input"
import { MatTableModule } from "@angular/material/table"
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner"
import { FormsModule } from "@angular/forms"
import { CdkColumnDef } from "@angular/cdk/table"

@NgModule({
  providers: [CdkColumnDef],
  declarations: [UserDetailsComponent],
  imports: [
    CommonModule,
    UserDetailsRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatProgressSpinnerModule,
    FormsModule,
  ],
})
export class UserDetailsModule {}

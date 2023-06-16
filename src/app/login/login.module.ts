import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { LoginRoutingModule } from "./login.routing.module"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { LoginComponent } from "./login/login.component"
import { ReactiveFormsModule } from "@angular/forms"
import { MatButtonModule } from "@angular/material/button"

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
})
export class LoginModule {}

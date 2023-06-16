import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { LoginComponent } from "./login/login.component"

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    runGuardsAndResolvers: "always",
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}

// import { NgModule } from "@angular/core"
// import { RouterModule, Routes } from "@angular/router"

// const routes: Routes = []

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class LoginRoutingModule {}

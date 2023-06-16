import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AuthGuard } from "./auth/auth.guard"

const routes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "schools",
    loadChildren: () =>
      import("./school-management/school-management.module").then(
        (m) => m.SchoolManagementModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: "users",
    loadChildren: () =>
      import("./user-details/user-details.module").then(
        (m) => m.UserDetailsModule
      ),
  },

  { path: "**", redirectTo: "schools", pathMatch: "full" },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

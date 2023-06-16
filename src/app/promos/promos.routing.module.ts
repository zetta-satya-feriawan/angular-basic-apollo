import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { PromosComponent } from "./promos/promos.component"
import { CreatePromoComponent } from "./create-promo/create-promo.component"

const routes: Routes = [
  {
    path: "",
    component: PromosComponent,
    runGuardsAndResolvers: "always",
  },
  {
    path: "create",
    component: CreatePromoComponent,
    runGuardsAndResolvers: "always",
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromosRoutingModule {}

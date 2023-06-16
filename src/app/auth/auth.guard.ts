import { Injectable } from "@angular/core"
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router"
import { Observable } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private route: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const userToken = localStorage.getItem("token")

    if (userToken) {
      return true
    } else {
      this.route.navigate(["/login"])
      return false
    }
  }
}

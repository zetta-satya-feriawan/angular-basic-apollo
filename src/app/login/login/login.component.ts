import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { AuthService } from "src/app/auth/auth.service"
import { SubSink } from "subsink"
interface Payload {
  email: string
  password: string
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
// export class LoginComponent implements OnInit {
//   private subs = new SubSink()
//   loginForm: FormGroup = this.initFormGroup()

//   constructor(
//     private authService: AuthService,
//     private fb: FormBuilder,
//     private router: Router
//   ) {}

//   initFormGroup() {
//     return this.fb.group({
//       email: ["", [Validators.required]],
//       password: ["", [Validators.required]],
//     })
//   }

//   ngOnInit(): void {}

//   login() {
//     const payload: Payload = this.loginForm.value

//     this.subs.sink = this.authService
//       .loginUser(payload.email, payload.password)
//       .subscribe((resp) => {
//         console.log(resp)
//         if (resp) {
//           this.router.navigate(["/schools"])
//         } else {
//           console.log("no resp")
//         }
//       })
//   }

//   handleLogin() {
//     this.login()
//   }
// }
export class LoginComponent implements OnInit {
  private subs = new SubSink()
  loginForm: FormGroup = this.initFormGroup()

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  initFormGroup() {
    return this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
    })
  }

  login() {
    const payload: Payload = this.loginForm.value
    this.subs.sink = this.authService
      .loginUser(payload.email, payload.password)
      .subscribe((resp) => {
        console.log(resp)
        if (resp) {
          this.router.navigate(["/schools"])
        }
      })
  }
  goToUsers() {
    this.router.navigate(["/users"])
  }
}

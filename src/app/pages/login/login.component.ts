import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  isAdminLogin = false;
  isLoginFailed = false;

  loginForm = this.fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params["success"]) {
        this.isLoginFailed = true;
      }
    });
  }

  setLoginAdmin() {
    this.isAdminLogin = true;
  }

  setLoginEmployee() {
    this.isAdminLogin = false;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      if (this.isAdminLogin) {
        this.authService.loginAdmin(this.loginForm.value);
      } else {
        this.authService.login(this.loginForm.value);
      }
    }
  }
}

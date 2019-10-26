import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  isAdminLogin = false;

  loginForm = this.fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required]
  });

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {}

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

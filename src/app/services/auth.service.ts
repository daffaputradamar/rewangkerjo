import { Injectable, EventEmitter } from "@angular/core";
import { apiHost } from "../../assets/config/config";

import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  loginStatus: boolean = true;
  private apiHost = apiHost;
  private jwt: string;
  loginStatusUpdate = new EventEmitter<boolean>();

  setLoginStatus(status: boolean) {
    this.loginStatus = status;
    this.loginStatusUpdate.emit(this.loginStatus);
  }

  getLoginStatus(): boolean {
    return this.loginStatus;
  }

  constructor(private router: Router, private http: HttpClient) {}

  public login() {
    this.loginStatus = true;
    this.loginStatusUpdate.emit(this.loginStatus);
    this.router.navigate(["/acara"]);
  }

  public logout() {
    // localStorage.removeItem("authToken");
    this.loginStatus = false;
    this.loginStatusUpdate.emit(this.loginStatus);
    this.router.navigate(["/"]);
  }
}

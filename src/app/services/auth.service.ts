import { Injectable, EventEmitter } from "@angular/core";
import { environment } from "src/environments/environment";
import decode from "jwt-decode";

import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { IUser, IToken, IAdmin, IEmployee } from "../interfaces";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public loginStatus = new BehaviorSubject<boolean>(
    localStorage.getItem("token") ? true : false
  );
  isLoggedIn: boolean;
  apiUrl = environment.apiUrl;
  public jwt: string;

  setLoginStatus(status: boolean) {
    this.loginStatus.next(localStorage.getItem("token") ? true : false);
  }

  getLoginStatus(): Observable<boolean> {
    return this.loginStatus.asObservable();
  }

  getUser(): IAdmin | IEmployee {
    return JSON.parse(localStorage.getItem("user"));
  }

  getToken() {
    return localStorage.getItem("token");
  }

  constructor(private router: Router, private http: HttpClient) {}

  public login(user: IUser) {
    this.loginStatus.next(true);
    this.http
      .post<IToken>(`${this.apiUrl}/employee/login`, {
        username: user.username,
        password: user.password
      })
      .subscribe(token => {
        if (token.token) {
          this.jwt = token.token as string;
          localStorage.setItem("token", this.jwt);
          localStorage.setItem("user", JSON.stringify(decode(this.jwt).data));
          this.setLoginStatus(true);
          this.router.navigate(["/acara"]);
        }
      });
  }

  public logout() {
    this.loginStatus.next(false);
    this.jwt = "";
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.router.navigate(["/"]);
  }
}

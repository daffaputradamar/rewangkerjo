import { Injectable } from "@angular/core";
import { apiHost } from "../../assets/config/config";

import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private apiHost = apiHost;

  private jwt: string;

  constructor(private router: Router, private http: HttpClient) {}

  public isLoggedIn(): boolean {
    // let isLoggedIn = localStorage.getItem("authToken") ? true : false;
    let isLoggedIn = true;
    return isLoggedIn;
  }

  logout() {
    localStorage.removeItem("authToken");
    this.router.navigate(["/"]);
  }
}

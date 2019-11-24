import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { environment } from "src/environments/environment";
import { INotification } from "../interfaces";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class NotificationService {
  constructor(private http: HttpClient, private authService: AuthService) {}
  apiUrl = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.authService.getToken()}`
    })
  };

  public getNotifications(): Observable<INotification[]> {
    return this.http.get<INotification[]>(
      `${this.apiUrl}/notification`,
      this.httpOptions
    );
  }

  public updateNotifications(): Observable<boolean> {
    return this.http.put<boolean>(
      `${this.apiUrl}/notification`,
      {},
      this.httpOptions
    );
  }
}

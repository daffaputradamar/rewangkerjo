import { Injectable } from "@angular/core";
import { IEvent, IEmployee, IVendor, IAssignment } from "../interfaces";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class EventService {
  apiUrl = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.authService.getToken()}`
    })
  };

  constructor(private http: HttpClient, private authService: AuthService) {}

  public getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(`${this.apiUrl}/event`);
  }

  public showEvent(id: string): Observable<IEvent> {
    return this.http.get<IEvent>(`${this.apiUrl}/event/${id}`);
  }

  public addEvent(event: IEvent): Observable<IEvent> {
    return this.http.post<IEvent>(
      `${this.apiUrl}/event`,
      event,
      this.httpOptions
    );
  }

  public updateEvent(id: string, data: any): Observable<IEvent> {
    return this.http.put<IEvent>(
      `${this.apiUrl}/event/${id}`,
      data,
      this.httpOptions
    );
  }

  public deleteEvent(id: string): Observable<IEmployee> {
    return this.http.delete<IEmployee>(
      `${this.apiUrl}/event/${id}`,
      this.httpOptions
    );
  }
}

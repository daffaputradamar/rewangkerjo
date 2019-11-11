import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { IAssignment } from "../interfaces";

@Injectable({
  providedIn: "root"
})
export class AssignmentService {
  apiUrl = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.authService.getToken()}`
    })
  };

  constructor(private http: HttpClient, private authService: AuthService) {}

  public getAssignments(): Observable<IAssignment[]> {
    return this.http.get<IAssignment[]>(`${this.apiUrl}/assignment`);
  }

  public showAssignment(id: string): Observable<IAssignment> {
    return this.http.get<IAssignment>(`${this.apiUrl}/assignment/${id}`);
  }

  public addAssignment(assignment: IAssignment): Observable<IAssignment> {
    return this.http.post<IAssignment>(
      `${this.apiUrl}/assignment`,
      assignment,
      this.httpOptions
    );
  }

  public updateAssignment(id: string, data: any): Observable<IAssignment> {
    return this.http.put<IAssignment>(
      `${this.apiUrl}/assignment/${id}`,
      data,
      this.httpOptions
    );
  }

  public deleteAssignment(id: string): Observable<IAssignment> {
    return this.http.delete<IAssignment>(
      `${this.apiUrl}/assignment/${id}`,
      this.httpOptions
    );
  }
}

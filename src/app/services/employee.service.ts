import { Injectable } from "@angular/core";
import { IEmployee, IAdmin } from "../interfaces";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.authService.getToken()}`
    })
  };
  apiUrl = environment.apiUrl;

  public getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(`${this.apiUrl}/employee`);
  }

  public showEmployee(id: string): Observable<IEmployee> {
    return this.http.get<IEmployee>(`${this.apiUrl}/employee/${id}`);
  }

  public showAdmin(id: string): Observable<IAdmin> {
    return this.http.get<IAdmin>(`${this.apiUrl}/admin/${id}`);
  }

  public addEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(
      `${this.apiUrl}/employee`,
      employee,
      this.httpOptions
    );
  }

  public editEmployee(id: string, data: any): Observable<IEmployee> {
    return this.http.put<IEmployee>(
      `${this.apiUrl}/employee`,
      data,
      this.httpOptions
    );
  }

  public deleteEmployee(id: string): Observable<IEmployee> {
    return this.http.delete<IEmployee>(
      `${this.apiUrl}/employee/${id}`,
      this.httpOptions
    );
  }
}

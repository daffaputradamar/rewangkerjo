import { Injectable } from "@angular/core";
import { IEmployee } from "../interfaces";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  employees: IEmployee[] = [
    {
      _id: "1",
      address: "Lowokwaru, Malang",
      name: "Robertus Wanda",
      phone: "081987654321",
      position: 1,
      username: "robertuswanda"
    },
    {
      _id: "2",
      address: "Lowokwaru, Malang",
      name: "Robertus Bertus",
      phone: "081987654321",
      position: 1,
      username: "robertuswanda"
    },
    {
      _id: "3",
      address: "Lowokwaru, Malang",
      name: "Wanda Bertus",
      phone: "081987654321",
      position: 2,
      username: "robertuswanda"
    },
    {
      _id: "4",
      address: "Lowokwaru, Malang",
      name: "Wanda Wanda",
      phone: "081987654321",
      position: 2,
      username: "robertuswanda"
    }
  ];
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

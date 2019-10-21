import { Injectable } from "@angular/core";
import { IEmployee } from "../interfaces";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

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
  constructor(private http: HttpClient) {}

  apiUrl = environment.apiUrl;

  public getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(`${this.apiUrl}/employee`);
  }

  public showEmployee(id: string): Observable<IEmployee> {
    return this.http.get<IEmployee>(`${this.apiUrl}/employee/${id}`);
  }

  public addEmployee(employee: IEmployee) {
    this.employees.push(employee);
  }

  public editEmployee(id: string, employee: IEmployee) {
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i]._id === id) {
        this.employees[i] = employee;
        break;
      }
    }
  }

  public deleteEmployee(id: string) {
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i]._id === id) {
        this.employees.splice(i, 1);
        break;
      }
      if (this.employees[i]._id === id) {
        this.employees.splice(i, 1);
        break;
      }
    }
  }
}

import { Injectable } from "@angular/core";
import { IEmployee } from "../interfaces";

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
  constructor() {}

  public getEmployees(): IEmployee[] {
    return this.employees;
  }

  public showEmployee(id: string): IEmployee {
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i]._id === id) {
        return this.employees[i];
      }
    }
    return null;
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
}

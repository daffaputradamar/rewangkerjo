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
    }
  ];
  constructor() {}
}

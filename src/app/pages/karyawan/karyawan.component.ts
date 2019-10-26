import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/services/employee.service";
import { IEmployee, IAdmin } from "src/app/interfaces";

import { crew, staff } from "../../../assets/color";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-karyawan",
  templateUrl: "./karyawan.component.html",
  styleUrls: ["./karyawan.component.css"]
})
export class KaryawanComponent implements OnInit {
  employees: IEmployee[];
  employeesCrew: IEmployee[];
  employeeStaff: IEmployee[];

  editStatus = false;
  inputName: string;
  inputPhone: string;
  inputAddress: string;
  inputUsername: string;
  inputPassword: string;
  selectedPosition: string;

  inputSearchKru: string;
  inputSearchStaf: string;

  user;

  employeePosition = [
    {
      name: "Kru",
      color: crew,
      position: 2,
      isSelected: true
    },
    {
      name: "Staf",
      color: staff,
      position: 1,
      isSelected: true
    }
  ];

  employeePositionSelect;

  constructor(
    private employeeService: EmployeeService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
      this.employeeStaff = this.getEmployeeStaff();
      this.employeesCrew = this.getEmployeeCrew();

      this.user = this.authService.getUser();

      if (this.user.position === undefined) {
        this.employeePositionSelect = [
          {
            name: "Kru",
            position: 2
          },
          {
            name: "Staf",
            position: 1
          }
        ];
      } else if (this.user.position === 1) {
        this.employeePositionSelect = [
          {
            name: "Kru",
            position: 2
          }
        ];
      }

      this.inputSearchKru = "";
      this.inputSearchStaf = "";

      this.inputName = "";
      this.inputPhone = "";
      this.inputAddress = "";
      this.inputUsername = "";
      this.inputPassword = "";
      this.selectedPosition = this.employeePositionSelect[0].position;
    });
  }

  setEditStatus() {
    this.editStatus = !this.editStatus;
  }

  setSelectedEmployees($event) {
    for (let i = 0; i < this.employeePosition.length; i++) {
      if (this.employeePosition[i].name === $event) {
        this.employeePosition[i].isSelected = !this.employeePosition[i]
          .isSelected;
        break;
      }
    }
    this.onSearchKru();
    this.onSearchStaf();
  }

  getSelectedEmployees(): IEmployee[] {
    const selectedEmployees = this.employees.filter(employee => {
      const cat = this.employeePosition.filter(
        category => category.position === employee.position
      );
      if (cat[0].isSelected) {
        return employee;
      }
    });
    return selectedEmployees;
  }

  getEmployeeStaff(): IEmployee[] {
    const selectedEmployees = this.getSelectedEmployees();
    const employeeStaff = selectedEmployees.filter(
      employee => employee.position === 1
    );
    return employeeStaff;
  }
  getEmployeeCrew(): IEmployee[] {
    const selectedEmployees = this.getSelectedEmployees();
    const employeesCrew = selectedEmployees.filter(
      employee => employee.position === 2
    );
    return employeesCrew;
  }

  onSearchKru() {
    const employees = this.getEmployeeCrew();
    this.employeesCrew = employees.filter(employee => {
      const nameUpperCase = employee.name.toUpperCase();
      if (nameUpperCase.includes(this.inputSearchKru.toUpperCase())) {
        return employee;
      }
    });
  }

  onSearchStaf() {
    const employees = this.getEmployeeStaff();
    this.employeeStaff = employees.filter(employee => {
      const nameUpperCase = employee.name.toUpperCase();
      if (nameUpperCase.includes(this.inputSearchStaf.toUpperCase())) {
        return employee;
      }
    });
  }

  addEmployee() {
    const newKaryawan: IEmployee = {
      address: this.inputAddress,
      name: this.inputName,
      phone: this.inputPhone,
      username: this.inputUsername,
      password: this.inputPassword,
      position: Number(this.selectedPosition)
    };
    this.employeeService.addEmployee(newKaryawan).subscribe(newEmployee => {
      this.employeeService.getEmployees().subscribe(employees => {
        this.employees = employees;
        this.employeeStaff = this.getEmployeeStaff();
        this.employeesCrew = this.getEmployeeCrew();
        this.resetForm();
        this.setEditStatus();
      });
    });
  }

  resetForm() {
    this.inputName = "";
    this.inputPhone = "";
    this.inputAddress = "";
    this.inputUsername = "";
    this.inputPassword = "";
    this.selectedPosition = "2";
  }
}

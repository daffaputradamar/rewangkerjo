import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/services/employee.service";
import { IEmployee } from "src/app/interfaces";
import { ActivatedRoute } from "@angular/router";

import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { crew, staff } from "../../../assets/color";

@Component({
  selector: "app-karyawan-detail",
  templateUrl: "./karyawan-detail.component.html",
  styleUrls: ["./karyawan-detail.component.css"]
})
export class KaryawanDetailComponent implements OnInit {
  employee: IEmployee;
  id: string;
  editStatus = false;

  colorCrew = crew;
  colorStaff = staff;
  faEdit = faEdit;

  inputName: string;
  inputAddress: string;
  inputPhone: string;
  inputUsername: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      params => (this.id = params.get("id"))
    );
    this.employee = this.employeeService.showEmployee(this.id);
    this.inputName = this.employee.name;
    this.inputAddress = this.employee.address;
    this.inputPhone = this.employee.phone;
    this.inputUsername = this.employee.username;
  }

  setEditStatus() {
    this.editStatus = !this.editStatus;
  }

  editEmployee() {
    const employee: IEmployee = {
      _id: this.employee._id,
      password: this.employee.password,
      position: this.employee.position,
      address: this.inputAddress,
      name: this.inputName,
      phone: this.inputPhone,
      username: this.inputUsername
    };
    console.log(employee);
    this.employeeService.editEmployee(this.employee._id, employee);
    this.employee = this.employeeService.showEmployee(this.id);
    this.setEditStatus();
    this.resetForm();
  }

  resetForm() {
    this.inputName = this.employee.name;
    this.inputAddress = this.employee.address;
    this.inputPhone = this.employee.phone;
    this.inputUsername = this.employee.username;
  }
}

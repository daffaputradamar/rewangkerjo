import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/services/employee.service";
import { IEmployee, IAdmin } from "src/app/interfaces";
import { ActivatedRoute, Router } from "@angular/router";

import { faEdit, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { crew, staff } from "../../../assets/color";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-karyawan-detail",
  templateUrl: "./karyawan-detail.component.html",
  styleUrls: ["./karyawan-detail.component.css"]
})
export class KaryawanDetailComponent implements OnInit {
  employee: IEmployee;
  user: IEmployee | IAdmin;
  id: string;
  editStatus = false;
  loading = false;

  colorCrew = crew;
  colorStaff = staff;
  faEdit = faEdit;
  faEllipsisV = faEllipsisV;

  inputName: string;
  inputAddress: string;
  inputPhone: string;
  inputUsername: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loading = true;
    this.user = this.authService.getUser();
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.employeeService.showEmployee(this.id).subscribe(employee => {
        this.employee = employee;
        this.inputName = this.employee.name;
        this.inputAddress = this.employee.address;
        this.inputPhone = this.employee.phone;
        this.inputUsername = this.employee.username;
        this.loading = false;
      });
    });
  }

  setEditStatus() {
    this.editStatus = !this.editStatus;
  }

  editEmployee() {
    const newEmployee = {
      address: this.inputAddress,
      name: this.inputName,
      phone: this.inputPhone,
      username: this.inputUsername
    };
    this.employeeService
      .editEmployee(this.employee._id, newEmployee)
      .subscribe(newEmployee => {
        this.employeeService.showEmployee(this.id).subscribe(employee => {
          this.employee = employee;
          this.setEditStatus();
          this.resetForm();
        });
      });
  }

  deleteEmployee() {
    this.employeeService
      .deleteEmployee(this.employee._id)
      .subscribe(deletedEmployee => {
        this.router.navigate(["karyawan"]);
      });
  }

  resetForm() {
    this.inputName = this.employee.name;
    this.inputAddress = this.employee.address;
    this.inputPhone = this.employee.phone;
    this.inputUsername = this.employee.username;
  }
}

import { Component, OnInit } from "@angular/core";

import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeeService } from "src/app/services/employee.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-admin-detail",
  templateUrl: "./admin-detail.component.html",
  styleUrls: ["./admin-detail.component.css"]
})
export class AdminDetailComponent implements OnInit {
  employee;
  user;
  id: string;
  editStatus = false;
  loading = false;
  isAdmin: boolean;

  faEdit = faEdit;

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
    this.isAdmin = this.user.position === undefined ? true : false;
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.employeeService.showAdmin(this.id).subscribe(employee => {
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
        this.employeeService.showAdmin(this.id).subscribe(employee => {
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

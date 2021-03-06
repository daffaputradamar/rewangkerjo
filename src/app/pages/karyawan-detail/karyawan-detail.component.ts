import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/services/employee.service";
import { IEmployee, IAdmin, IAssignment } from "src/app/interfaces";
import { ActivatedRoute, Router } from "@angular/router";

import { faEdit, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { crew, staff } from "../../../assets/color";
import { AuthService } from "src/app/services/auth.service";
import { AssignmentService } from "src/app/services/assignment.service";

@Component({
  selector: "app-karyawan-detail",
  templateUrl: "./karyawan-detail.component.html",
  styleUrls: ["./karyawan-detail.component.css"]
})
export class KaryawanDetailComponent implements OnInit {
  employee: IEmployee;
  user;
  id: string;
  editStatus = false;
  editReset = false;
  loading = false;
  isAdmin: boolean;

  colorCrew = crew;
  colorStaff = staff;
  faEdit = faEdit;
  faEllipsisV = faEllipsisV;

  inputName: string;
  inputAddress: string;
  inputPhone: string;
  inputUsername: string;

  inputPassword: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private assignmentService: AssignmentService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loading = true;
    this.user = this.authService.getUser();
    this.isAdmin = this.user.position === undefined ? true : false;
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

  setEditReset() {
    this.editReset = !this.editReset;
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

  resetPassword() {
    const newPassword = {
      password: this.inputPassword
    };
    this.employeeService
      .resetPassword(this.employee._id, newPassword)
      .subscribe(newEmployee => {
        this.setEditReset();
        this.inputPassword = "";
      });
  }

  deleteEmployee() {
    this.employeeService
      .deleteEmployee(this.employee._id)
      .subscribe(deletedEmployee => {
        this.router.navigate(["karyawan"]);
      });
  }

  setAssignment($event) {
    let assignmentSet: IAssignment;
    for (let i = 0; i < this.employee.assignments.length; i++) {
      if (this.employee.assignments[i]._id === $event) {
        assignmentSet = this.employee.assignments[i];
        break;
      }
    }

    assignmentSet.isFinished = !assignmentSet.isFinished;

    this.assignmentService
      .updateAssignment(assignmentSet._id, {
        isFinished: assignmentSet.isFinished
      })
      .subscribe(event => {
        this.activatedRoute.paramMap.subscribe(params => {
          this.id = params.get("id");
          this.employeeService.showEmployee(this.id).subscribe(employee => {
            this.employee = employee;
            this.inputName = this.employee.name;
            this.inputAddress = this.employee.address;
            this.inputPhone = this.employee.phone;
            this.inputUsername = this.employee.username;
          });
        });
      });
  }

  resetForm() {
    this.inputName = this.employee.name;
    this.inputAddress = this.employee.address;
    this.inputPhone = this.employee.phone;
    this.inputUsername = this.employee.username;
  }
}

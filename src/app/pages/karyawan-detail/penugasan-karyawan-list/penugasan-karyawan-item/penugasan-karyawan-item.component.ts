import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IAssignment, IEmployee, IAdmin } from "src/app/interfaces";
import { formatDate } from "src/assets/util/formatDate";

@Component({
  selector: "app-penugasan-karyawan-item",
  templateUrl: "./penugasan-karyawan-item.component.html",
  styleUrls: ["./penugasan-karyawan-item.component.css"]
})
export class PenugasanKaryawanItemComponent implements OnInit {
  @Input() assignment: IAssignment;
  @Input() user: IEmployee | IAdmin;
  @Output() setAnAssignment = new EventEmitter<string>();

  formattedDate: string;
  doesDeadlineExceeded: boolean;

  constructor() {}

  ngOnInit() {
    this.formattedDate = formatDate(this.assignment.deadline);
    this.doesDeadlineExceeded =
      new Date(this.assignment.deadline) < new Date() &&
      !this.assignment.isFinished;
  }

  setAssignment() {
    if (this.user._id !== this.assignment.employee) {
      return false;
    }
    this.setAnAssignment.emit(this.assignment._id);
  }
}

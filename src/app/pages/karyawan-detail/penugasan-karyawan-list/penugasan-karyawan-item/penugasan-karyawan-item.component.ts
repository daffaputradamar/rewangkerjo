import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IAssignment, IEmployee, IAdmin } from "src/app/interfaces";

@Component({
  selector: "app-penugasan-karyawan-item",
  templateUrl: "./penugasan-karyawan-item.component.html",
  styleUrls: ["./penugasan-karyawan-item.component.css"]
})
export class PenugasanKaryawanItemComponent implements OnInit {
  @Input() assignment: IAssignment;
  @Input() user: IEmployee | IAdmin;
  @Output() setAnAssignment = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  setAssignment() {
    if (this.user._id !== this.assignment.employee) {
      return false;
    }
    this.setAnAssignment.emit(this.assignment._id);
  }
}

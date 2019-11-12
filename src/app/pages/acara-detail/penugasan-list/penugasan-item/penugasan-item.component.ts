import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IAssignment, IAdmin, IEmployee } from "src/app/interfaces";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-penugasan-item",
  templateUrl: "./penugasan-item.component.html",
  styleUrls: ["./penugasan-item.component.css"]
})
export class PenugasanItemComponent implements OnInit {
  @Input() assignment: IAssignment;
  @Input() user: IAdmin | IEmployee;
  @Output() setAssignmentStatus = new EventEmitter<string>();
  @Output() deleteAnAssignment = new EventEmitter<string>();
  faEllipsisV = faEllipsisV;

  constructor() {}

  ngOnInit() {}

  setStatus() {
    const employee = this.assignment.employee as IEmployee;
    if (employee._id !== this.user._id) {
      return false;
    }
    this.setAssignmentStatus.emit(this.assignment._id);
  }

  deleteAssignment() {
    this.deleteAnAssignment.emit(this.assignment._id);
  }
}

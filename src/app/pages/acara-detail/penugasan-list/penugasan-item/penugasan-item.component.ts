import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IAssignment } from "src/app/interfaces";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-penugasan-item",
  templateUrl: "./penugasan-item.component.html",
  styleUrls: ["./penugasan-item.component.css"]
})
export class PenugasanItemComponent implements OnInit {
  @Input() assignment: IAssignment;
  @Output() setAssignmentStatus = new EventEmitter<string>();
  @Output() deleteAnAssignment = new EventEmitter<string>();
  faEllipsisV = faEllipsisV;

  constructor() {}

  ngOnInit() {}

  setStatus() {
    this.setAssignmentStatus.emit(this.assignment._id);
  }

  deleteAssignment() {
    this.deleteAnAssignment.emit(this.assignment._id);
  }
}

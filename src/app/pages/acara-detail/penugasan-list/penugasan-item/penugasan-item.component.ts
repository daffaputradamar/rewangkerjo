import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IAssignment } from "src/app/interfaces";

@Component({
  selector: "app-penugasan-item",
  templateUrl: "./penugasan-item.component.html",
  styleUrls: ["./penugasan-item.component.css"]
})
export class PenugasanItemComponent implements OnInit {
  @Input() assignment: IAssignment;
  @Output() setAssignmentStatus = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  setStatus() {
    this.setAssignmentStatus.emit(this.assignment.assignment);
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IAssignment } from "src/app/interfaces";

@Component({
  selector: "app-penugasan-list",
  templateUrl: "./penugasan-list.component.html",
  styleUrls: ["./penugasan-list.component.css"]
})
export class PenugasanListComponent implements OnInit {
  @Input() assignments: IAssignment[];
  @Output() setAssignment = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  setAssignmentStatus($event) {
    this.setAssignment.emit($event);
  }
}

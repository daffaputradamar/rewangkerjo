import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IAssignment } from "src/app/interfaces";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-penugasan-list",
  templateUrl: "./penugasan-list.component.html",
  styleUrls: ["./penugasan-list.component.css"]
})
export class PenugasanListComponent implements OnInit {
  @Input() assignments: IAssignment[];
  @Output() setAssignment = new EventEmitter<string>();
  @Output() deleteAssignment = new EventEmitter<string>();

  user;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user = this.authService.getUser();
  }

  setAssignmentStatus($event) {
    this.setAssignment.emit($event);
  }

  deleteAnAssignment($event) {
    this.deleteAssignment.emit($event);
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IAssignment, IEvent, IAdmin, IEmployee } from "src/app/interfaces";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-penugasan-karyawan-list",
  templateUrl: "./penugasan-karyawan-list.component.html",
  styleUrls: ["./penugasan-karyawan-list.component.css"]
})
export class PenugasanKaryawanListComponent implements OnInit {
  @Input() assignments: IAssignment[];
  @Output() setAssignment = new EventEmitter<string>();

  assignmentOrganized;
  assignmentKeys: string[];

  user: IAdmin | IEmployee;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user = this.authService.getUser();
    const organizedData = this.assignments.reduce((acc, assignment) => {
      const convertedAssignment = assignment.event as IEvent;
      if (!acc[convertedAssignment._id]) {
        acc[convertedAssignment._id] = [assignment];
      } else {
        acc[convertedAssignment._id].push(assignment);
      }
      return acc;
    }, {});

    this.assignmentOrganized = organizedData;
    this.assignmentKeys = Object.keys(organizedData);
  }

  setAnAssignment($event) {
    this.setAssignment.emit($event);
  }
}

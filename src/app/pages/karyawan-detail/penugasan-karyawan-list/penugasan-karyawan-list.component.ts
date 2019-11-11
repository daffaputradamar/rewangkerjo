import { Component, OnInit, Input } from "@angular/core";
import { IAssignment, IEvent } from "src/app/interfaces";

@Component({
  selector: "app-penugasan-karyawan-list",
  templateUrl: "./penugasan-karyawan-list.component.html",
  styleUrls: ["./penugasan-karyawan-list.component.css"]
})
export class PenugasanKaryawanListComponent implements OnInit {
  @Input() assignments: IAssignment[];

  assignmentOrganized;
  assignmentKeys: string[];

  constructor() {}

  ngOnInit() {
    const organizedData = this.assignments.reduce((acc, assignment) => {
      const convertedAssignment = assignment.event as IEvent;
      if (!acc[convertedAssignment._id]) {
        acc[convertedAssignment._id] = [assignment];
      } else {
        acc[convertedAssignment._id].push(assignment);
      }
      return acc;
    }, {});

    console.log(organizedData);
    console.log(Object.keys(organizedData));

    this.assignmentOrganized = organizedData;
    this.assignmentKeys = Object.keys(organizedData);
  }
}

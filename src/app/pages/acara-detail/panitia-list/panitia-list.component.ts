import { Component, OnInit, Input } from "@angular/core";
import { IEmployee } from "src/app/interfaces";
import { crew, staff } from "../../../../assets/color";

@Component({
  selector: "app-panitia-list",
  templateUrl: "./panitia-list.component.html",
  styleUrls: ["./panitia-list.component.css"]
})
export class PanitiaListComponent implements OnInit {
  @Input() committees: IEmployee[];
  crew: IEmployee[];
  staff: IEmployee[];

  colorCrew = crew;
  colorStaff = staff;

  constructor() {}

  ngOnInit() {
    this.staff = this.committees.filter(committee => committee.position === 1);
    this.crew = this.committees.filter(committee => committee.position === 2);
  }
}

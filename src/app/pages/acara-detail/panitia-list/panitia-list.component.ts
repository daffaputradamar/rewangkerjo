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
  colorCrew = crew;
  colorStaff = staff;

  constructor() {}

  ngOnInit() {}
}

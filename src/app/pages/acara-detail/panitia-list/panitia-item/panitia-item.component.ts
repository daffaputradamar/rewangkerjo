import { Component, OnInit, Input } from "@angular/core";
import { IEmployee } from "src/app/interfaces";
import { crew, staff } from "../../../../../assets/color";

@Component({
  selector: "app-panitia-item",
  templateUrl: "./panitia-item.component.html",
  styleUrls: ["./panitia-item.component.css"]
})
export class PanitiaItemComponent implements OnInit {
  @Input() employee: IEmployee[];
  colorCrew = crew;
  colorStaff = staff;

  constructor() {}

  ngOnInit() {
    console.log(this.employee);
  }
}

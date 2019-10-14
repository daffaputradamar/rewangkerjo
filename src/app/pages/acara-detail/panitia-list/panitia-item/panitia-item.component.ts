import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IEmployee } from "src/app/interfaces";
import { crew, staff } from "../../../../../assets/color";

import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-panitia-item",
  templateUrl: "./panitia-item.component.html",
  styleUrls: ["./panitia-item.component.css"]
})
export class PanitiaItemComponent implements OnInit {
  @Input() employee: IEmployee;
  @Output() deleteAPanitia = new EventEmitter<string>();
  faEllipsisV = faEllipsisV;
  colorCrew = crew;
  colorStaff = staff;

  constructor() {}

  ngOnInit() {}

  deletePanitia() {
    this.deleteAPanitia.emit(this.employee._id);
  }
}

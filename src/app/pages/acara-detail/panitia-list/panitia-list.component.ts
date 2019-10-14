import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IEmployee } from "src/app/interfaces";
import { crew, staff } from "../../../../assets/color";

@Component({
  selector: "app-panitia-list",
  templateUrl: "./panitia-list.component.html",
  styleUrls: ["./panitia-list.component.css"]
})
export class PanitiaListComponent implements OnInit {
  @Input() committees: IEmployee[];
  @Output() deletePanitia = new EventEmitter<string>();
  colorCrew = crew;
  colorStaff = staff;

  constructor() {}

  ngOnInit() {}

  deleteAPanitia($event) {
    this.deletePanitia.emit($event);
  }
}

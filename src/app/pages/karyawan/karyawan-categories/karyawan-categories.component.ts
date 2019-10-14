import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-karyawan-categories",
  templateUrl: "./karyawan-categories.component.html",
  styleUrls: ["./karyawan-categories.component.css"]
})
export class KaryawanCategoriesComponent implements OnInit {
  @Input() position;
  @Output() setSelectedEmployees = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  setSelected() {
    this.setSelectedEmployees.emit(this.position.name);
  }
}

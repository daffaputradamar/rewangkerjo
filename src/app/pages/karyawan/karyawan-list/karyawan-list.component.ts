import { Component, OnInit, Input } from "@angular/core";
import { IEmployee } from "src/app/interfaces";

@Component({
  selector: "app-karyawan-list",
  templateUrl: "./karyawan-list.component.html",
  styleUrls: ["./karyawan-list.component.css"]
})
export class KaryawanListComponent implements OnInit {
  @Input() employees: IEmployee[];

  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit, Input } from "@angular/core";
import { IAssignment } from "src/app/interfaces";

@Component({
  selector: "app-penugasan-karyawan-item",
  templateUrl: "./penugasan-karyawan-item.component.html",
  styleUrls: ["./penugasan-karyawan-item.component.css"]
})
export class PenugasanKaryawanItemComponent implements OnInit {
  @Input() assignment: IAssignment;
  constructor() {}

  ngOnInit() {}
}

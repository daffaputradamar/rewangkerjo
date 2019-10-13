import { Component, OnInit, Input } from "@angular/core";
import { IEmployee } from "src/app/interfaces";

@Component({
  selector: "app-panitia-item",
  templateUrl: "./panitia-item.component.html",
  styleUrls: ["./panitia-item.component.css"]
})
export class PanitiaItemComponent implements OnInit {
  @Input() employees: IEmployee[];

  constructor() {}

  ngOnInit() {}
}

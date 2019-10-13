import { Component, OnInit, Input } from "@angular/core";
import { IEvent } from "src/app/interfaces";

@Component({
  selector: "app-acara-deskripsi",
  templateUrl: "./acara-deskripsi.component.html",
  styleUrls: ["./acara-deskripsi.component.css"]
})
export class AcaraDeskripsiComponent implements OnInit {
  @Input() event: IEvent;
  @Input() date: string;

  constructor() {}

  ngOnInit() {}
}

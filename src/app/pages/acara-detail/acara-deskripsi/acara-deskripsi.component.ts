import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IEvent } from "src/app/interfaces";

@Component({
  selector: "app-acara-deskripsi",
  templateUrl: "./acara-deskripsi.component.html",
  styleUrls: ["./acara-deskripsi.component.css"]
})
export class AcaraDeskripsiComponent implements OnInit {
  @Input() event: IEvent;
  @Input() date: string;

  @Output() deleteEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  deleteAcara() {
    this.deleteEvent.emit(this.event._id);
  }
}

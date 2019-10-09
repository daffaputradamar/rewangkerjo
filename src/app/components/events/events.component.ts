import { Component, OnInit, Input } from "@angular/core";
import { IEvent } from "src/app/interfaces";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.css"]
})
export class EventsComponent implements OnInit {
  @Input() events: IEvent[];
  constructor() {}

  ngOnInit() {}
}

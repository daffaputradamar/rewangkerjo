import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { IEvent } from "src/app/interfaces";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import { formatDate } from "../../../../assets/util/formatDate";

@Component({
  selector: "app-event-item",
  templateUrl: "./event-item.component.html",
  styleUrls: ["./event-item.component.css"]
})
export class EventItemComponent implements OnInit, OnChanges {
  @Input() event: IEvent;
  faExternalLinkAlt = faExternalLinkAlt;
  formattedDate: string;

  ngOnChanges() {
    console.log(this.event.createdAt);
    this.formattedDate = formatDate(this.event.createdAt);
  }

  constructor() {}

  ngOnInit() {}
}

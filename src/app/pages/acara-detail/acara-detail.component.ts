import { Component, OnInit } from "@angular/core";
import {
  IEvent,
  IEmployee,
  IVendor,
  IAssignment,
  IDocument
} from "src/app/interfaces";

import { formatDate } from "../../../assets/util/formatDate";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "src/app/services/event.service";

@Component({
  selector: "app-acara-detail",
  templateUrl: "./acara-detail.component.html",
  styleUrls: ["./acara-detail.component.css"]
})
export class AcaraDetailComponent implements OnInit {
  formattedDate: string;
  event: IEvent;
  id: string;
  committees: IEmployee[];
  vendors: IVendor[];
  assignments: IAssignment[];
  documents: IDocument[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      params => (this.id = params.get("id"))
    );
    this.event = this.eventService.showEvent(this.id);
    this.formattedDate = formatDate(this.event.createdAt);
    this.committees = this.event.committees;
    this.vendors = this.event.vendors;
    this.assignments = this.event.assignments;
    this.documents = this.event.documents;
  }

  setAssignment($event) {
    let event = this.event;
    for (let i = 0; i < event.assignments.length; i++) {
      if (event.assignments[i].assignment === $event) {
        event.assignments[i].isFinished = !event.assignments[i].isFinished;
        break;
      }
    }
    this.updateAnEvent(event);
  }

  updateAnEvent(event: IEvent) {
    this.eventService.updateAnEvent(this.event._id, event);
  }
}

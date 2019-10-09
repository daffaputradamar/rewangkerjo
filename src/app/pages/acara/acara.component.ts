import { Component, OnInit } from "@angular/core";
import { CategoryService } from "src/app/services/category.service";
import { ICategory, IEvent } from "src/app/interfaces";
import { EventService } from "src/app/services/event.service";

@Component({
  selector: "app-acara",
  templateUrl: "./acara.component.html",
  styleUrls: ["./acara.component.css"]
})
export class AcaraComponent implements OnInit {
  categories: ICategory[];
  events: IEvent[];

  eventsUnfinished: IEvent[];
  eventsFinished: IEvent[];

  constructor(
    private categoryService: CategoryService,
    private eventService: EventService
  ) {}

  ngOnInit() {
    const categoriesTemp = this.categoryService.getCategories();
    categoriesTemp.forEach(cat => (cat.isSelected = false));
    categoriesTemp[0].isSelected = true;
    this.categories = categoriesTemp;
    this.events = this.eventService.getEvents();
    this.eventsFinished = this.getFinishedEvent();
    this.eventsUnfinished = this.getUnfinishedEvent();
  }

  getFinishedEvent(): IEvent[] {
    const finishedEvent: IEvent[] = this.events.filter(
      event => event.isFinished
    );
    return finishedEvent;
  }

  getUnfinishedEvent(): IEvent[] {
    const unfinishedEvent: IEvent[] = this.events.filter(
      event => !event.isFinished
    );
    return unfinishedEvent;
  }
}

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

  eventsOngoing: IEvent[];
  eventsFinished: IEvent[];

  constructor(
    private categoryService: CategoryService,
    private eventService: EventService
  ) {}

  ngOnInit() {
    const categoriesTemp = this.categoryService.getCategories();
    categoriesTemp.forEach(cat => (cat.isSelected = true));
    this.categories = categoriesTemp;
    this.events = this.eventService.getEvents();
    this.getFinishedEvent();
    this.getUnfinishedEvent();
  }

  getSelectedCategory(): IEvent[] {
    const selectedEvent: IEvent[] = this.events.filter(event => {
      const cat = this.categories.filter(category => {
        return category._id === event.category._id;
      });
      if (cat[0].isSelected) {
        return event;
      }
    });
    return selectedEvent;
  }

  private getFinishedEvent() {
    const selectedEvent = this.getSelectedCategory();
    const finishedEvent: IEvent[] = selectedEvent.filter(
      event => event.isFinished
    );
    this.eventsFinished = finishedEvent;
  }

  private getUnfinishedEvent() {
    const selectedEvent = this.getSelectedCategory();
    const unfinishedEvent: IEvent[] = selectedEvent.filter(
      event => !event.isFinished
    );
    this.eventsOngoing = unfinishedEvent;
  }

  setCategorySelected($event) {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i]._id === $event) {
        this.categories[i].isSelected = !this.categories[i].isSelected;
        break;
      }
    }
    this.getFinishedEvent();
    this.getUnfinishedEvent();
    console.log(this.eventsFinished, this.eventsOngoing);
  }
}

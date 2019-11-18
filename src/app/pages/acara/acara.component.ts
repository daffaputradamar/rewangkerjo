import { Component, OnInit } from "@angular/core";
import { CategoryService } from "src/app/services/category.service";
import { ICategory, IEvent, IEmployee, IAdmin } from "src/app/interfaces";
import { EventService } from "src/app/services/event.service";
import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-acara",
  templateUrl: "./acara.component.html",
  styleUrls: ["./acara.component.css"]
})
export class AcaraComponent implements OnInit {
  categories: ICategory[];
  events: IEvent[];
  user;
  loading = false;

  eventsOngoing: IEvent[];
  eventsFinished: IEvent[];

  constructor(
    private categoryService: CategoryService,
    private eventService: EventService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.user = this.authService.getUser();
    this.categoryService.getCategories().subscribe(categories => {
      const _categoriesTemp = categories;
      _categoriesTemp.forEach(cat => (cat.isSelected = true));
      this.categories = _categoriesTemp;
      this.eventService.getEvents().subscribe(events => {
        this.events = events;
        this.getFinishedEvent();
        this.getUnfinishedEvent();
        this.loading = false;
      });
    });
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
  }
}

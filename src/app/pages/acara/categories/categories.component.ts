import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ICategory } from "src/app/interfaces";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"]
})
export class CategoriesComponent implements OnInit {
  @Input() categories: ICategory[];

  @Output() setCategorySelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  setSelected($event) {
    this.setCategorySelected.emit($event);
  }
}

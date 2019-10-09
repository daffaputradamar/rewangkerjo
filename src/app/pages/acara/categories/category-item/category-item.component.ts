import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ICategory } from "src/app/interfaces";

@Component({
  selector: "app-category-item",
  templateUrl: "./category-item.component.html",
  styleUrls: ["./category-item.component.css"]
})
export class CategoryItemComponent implements OnInit {
  @Input() category: ICategory;

  @Output() setSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  setId() {
    this.setSelected.emit(this.category._id);
  }
}

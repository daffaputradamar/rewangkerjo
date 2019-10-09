import { Injectable } from "@angular/core";

import { ICategory } from "../interfaces";

@Injectable({
  providedIn: "root"
})
export class CategoryService {
  categories: ICategory[] = [
    {
      _id: "1",
      name: "wedding",
      color: "#F368E0"
    },
    {
      _id: "2",
      name: "gathering",
      color: "#54A0FF"
    }
  ];

  constructor() {}

  public getCategories(): ICategory[] {
    return this.categories;
  }
}

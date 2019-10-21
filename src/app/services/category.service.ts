import { Injectable } from "@angular/core";

import { ICategory } from "../interfaces";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

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

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.apiUrl}/category`);
  }
}

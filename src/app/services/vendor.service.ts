import { Injectable } from "@angular/core";
import { IVendor } from "../interfaces";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class VendorService {
  vendors: IVendor[] = [
    {
      _id: "1",
      name: "Vendor 1",
      phone: "085123456789"
    },
    {
      _id: "2",
      name: "Vendor 2",
      phone: "085987654321"
    },
    {
      _id: "3",
      name: "Vendor 3",
      phone: "085123456789"
    },
    {
      _id: "4",
      name: "Vendor 4",
      phone: "085987654321"
    }
  ];

  constructor(private http: HttpClient) {}
  apiUrl = environment.apiUrl;

  public getVendors(): Observable<IVendor[]> {
    return this.http.get<IVendor[]>(`${this.apiUrl}/vendor`);
  }
}

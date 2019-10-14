import { Injectable } from "@angular/core";
import { IVendor } from "../interfaces";

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

  constructor() {}

  public getVendors(): IVendor[] {
    return this.vendors;
  }
}

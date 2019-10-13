import { Component, OnInit, Input } from "@angular/core";
import { IVendor } from "src/app/interfaces";

@Component({
  selector: "app-vendor-item",
  templateUrl: "./vendor-item.component.html",
  styleUrls: ["./vendor-item.component.css"]
})
export class VendorItemComponent implements OnInit {
  @Input() vendor: IVendor;
  constructor() {}

  ngOnInit() {}
}

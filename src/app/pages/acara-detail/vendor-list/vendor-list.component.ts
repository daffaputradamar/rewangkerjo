import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IVendor } from "src/app/interfaces";

@Component({
  selector: "app-vendor-list",
  templateUrl: "./vendor-list.component.html",
  styleUrls: ["./vendor-list.component.css"]
})
export class VendorListComponent implements OnInit {
  @Input() vendors: IVendor[];

  @Output() deleteVendor = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  deleteAVendor($event) {
    this.deleteVendor.emit($event);
  }
}

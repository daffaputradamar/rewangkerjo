import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IVendor } from "src/app/interfaces";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-vendor-item",
  templateUrl: "./vendor-item.component.html",
  styleUrls: ["./vendor-item.component.css"]
})
export class VendorItemComponent implements OnInit {
  @Input() vendor: IVendor;
  @Output() deleteAVendor = new EventEmitter<string>();
  faEllipsisV = faEllipsisV;
  constructor() {}

  ngOnInit() {}

  deleteVendor() {
    this.deleteAVendor.emit(this.vendor._id);
  }
}

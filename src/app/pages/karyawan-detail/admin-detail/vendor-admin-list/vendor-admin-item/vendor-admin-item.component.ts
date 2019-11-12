import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IVendor } from "src/app/interfaces";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-vendor-admin-item",
  templateUrl: "./vendor-admin-item.component.html",
  styleUrls: ["./vendor-admin-item.component.css"]
})
export class VendorAdminItemComponent implements OnInit {
  @Input() vendor: IVendor;
  @Output() deleteAVendor = new EventEmitter<string>();

  faEllipsisV = faEllipsisV;

  constructor() {}

  ngOnInit() {}

  deleteVendor() {
    this.deleteAVendor.emit(this.vendor._id);
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IVendor } from "src/app/interfaces";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-vendor-admin-list",
  templateUrl: "./vendor-admin-list.component.html",
  styleUrls: ["./vendor-admin-list.component.css"]
})
export class VendorAdminListComponent implements OnInit {
  @Input() vendors: IVendor[];
  @Output() deleteVendor = new EventEmitter<string>();
  @Output() addVendor = new EventEmitter<IVendor>();

  inputName: string;
  inputPhone: string;

  editVendor = false;

  faEdit = faEdit;

  constructor() {}

  ngOnInit() {
    this.resetForm();
  }

  setEditVendor() {
    this.editVendor = !this.editVendor;
  }

  deleteAVendor($event) {
    this.deleteVendor.emit($event);
  }

  addAVendor() {
    const newVendor: IVendor = {
      name: this.inputName,
      phone: this.inputPhone
    };
    this.addVendor.emit(newVendor);
    this.resetForm();
  }

  resetForm() {
    this.inputName = "";
    this.inputPhone = "";
  }
}

import { Component, OnInit, Input } from "@angular/core";
import { IDocument } from "src/app/interfaces";

@Component({
  selector: "app-dokumen-item",
  templateUrl: "./dokumen-item.component.html",
  styleUrls: ["./dokumen-item.component.css"]
})
export class DokumenItemComponent implements OnInit {
  @Input() document: IDocument;

  constructor() {}

  ngOnInit() {
    this.document.deskripsi;
  }
}

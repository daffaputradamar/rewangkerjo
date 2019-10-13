import { Component, OnInit, Input } from "@angular/core";
import { IDocument } from "src/app/interfaces";

@Component({
  selector: "app-dokumen-list",
  templateUrl: "./dokumen-list.component.html",
  styleUrls: ["./dokumen-list.component.css"]
})
export class DokumenListComponent implements OnInit {
  @Input() documents: IDocument[];
  constructor() {}

  ngOnInit() {}
}

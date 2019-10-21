import { Component, OnInit } from "@angular/core";
import {
  IEvent,
  IEmployee,
  IVendor,
  IAssignment,
  IDocument
} from "src/app/interfaces";

import { formatDate } from "../../../assets/util/formatDate";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "src/app/services/event.service";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { EmployeeService } from "src/app/services/employee.service";
import { VendorService } from "src/app/services/vendor.service";

@Component({
  selector: "app-acara-detail",
  templateUrl: "./acara-detail.component.html",
  styleUrls: ["./acara-detail.component.css"]
})
export class AcaraDetailComponent implements OnInit {
  formattedDate: string;
  event: IEvent;
  id: string;
  committees: IEmployee[];
  vendors: IVendor[];
  assignments: IAssignment[];
  // documents: IDocument[];
  employees: IEmployee[];
  availableVendors: IVendor[];
  faEdit = faEdit;

  selectedEmployee: string;
  selectedVendor: string;
  inputAssignment: string;

  editPanitia = false;
  editVendor = false;
  editAssignment = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventService,
    private employeeService: EmployeeService,
    private vendorService: VendorService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.eventService.showEvent(this.id).subscribe(event => {
        this.event = event;
        console.log(this.event);
        this.formattedDate = formatDate(this.event.createdAt);
        this.committees = this.event.committees;
        this.vendors = this.event.vendors;
        this.assignments = this.event.assignments;

        this.employeeService.getEmployees().subscribe(employees => {
          this.employees = employees;
          this.vendorService.getVendors().subscribe(vendors => {
            this.availableVendors = vendors;
          });
        });
        this.inputAssignment = "";
      });
    });
  }

  setEditPanitia() {
    this.editPanitia = !this.editPanitia;
  }

  setEditVendor() {
    this.editVendor = !this.editVendor;
  }

  setEditAssignment() {
    this.editAssignment = !this.editAssignment;
  }

  // addPanitia() {
  //   let committee: IEmployee;
  //   for (let i = 0; i < this.employees.length; i++) {
  //     if (this.employees[i]._id === this.selectedEmployee) {
  //       committee = this.employees[i];
  //     }
  //   }
  //   this.eventService.addCommittee(this.event._id, committee);
  //   this.event = this.eventService.showEvent(this.event._id);
  //   this.committees = this.event.committees;
  // }

  // addVendor() {
  //   let vendor: IVendor;
  //   for (let i = 0; i < this.availableVendors.length; i++) {
  //     if (this.availableVendors[i]._id === this.selectedVendor) {
  //       vendor = this.availableVendors[i];
  //     }
  //   }
  //   this.eventService.addVendor(this.event._id, vendor);
  //   this.event = this.eventService.showEvent(this.event._id);
  //   this.vendors = this.event.vendors;
  // }

  // addAssignment() {
  //   let assignment: IAssignment = {
  //     assignment: this.inputAssignment,
  //     isFinished: false
  //   };
  //   console.log(assignment);
  //   this.eventService.addAssignment(this.event._id, assignment);
  //   this.event = this.eventService.showEvent(this.event._id);
  //   this.assignments = this.event.assignments;
  // }

  // deletePanitia($event) {
  //   this.eventService.deleteCommittee(this.event._id, $event);
  //   this.event = this.eventService.showEvent(this.event._id);
  //   this.committees = this.event.committees;
  // }

  // deleteVendor($event) {
  //   this.eventService.deleteVendor(this.event._id, $event);
  //   this.event = this.eventService.showEvent(this.event._id);
  //   this.vendors = this.event.vendors;
  // }

  // deleteAssignment($event) {
  //   this.eventService.deleteAssignment(this.event._id, $event);
  //   this.event = this.eventService.showEvent(this.event._id);
  //   this.assignments = this.event.assignments;
  // }

  // setAssignment($event) {
  //   let event = this.event;
  //   for (let i = 0; i < event.assignments.length; i++) {
  //     if (event.assignments[i].assignment === $event) {
  //       event.assignments[i].isFinished = !event.assignments[i].isFinished;
  //       break;
  //     }
  //   }
  //   this.updateAnEvent(event);
  // }

  // updateAnEvent(event: IEvent) {
  //   this.eventService.updateAnEvent(this.event._id, event);
  // }

  // markAsFinished() {
  //   this.eventService.markAsFinished(this.event._id);
  // }
}

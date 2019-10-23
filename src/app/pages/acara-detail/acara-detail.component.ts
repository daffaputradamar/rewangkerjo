import { Component, OnInit } from "@angular/core";
import {
  IEvent,
  IEmployee,
  IVendor,
  IAssignment,
  IDocument
} from "src/app/interfaces";

import { formatDate } from "../../../assets/util/formatDate";
import { ActivatedRoute, Router } from "@angular/router";
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
  loading = false;
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
    private vendorService: VendorService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loading = true;
    this.inputAssignment = "";
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.eventService.showEvent(this.id).subscribe(event => {
        this.event = event;
        this.formattedDate = formatDate(this.event.createdAt);
        this.committees = this.event.committees;
        this.vendors = this.event.vendors;
        this.assignments = this.event.assignments;

        this.employeeService.getEmployees().subscribe(employees => {
          this.employees = employees;
          this.selectedEmployee = employees[0]._id;
          this.vendorService.getVendors().subscribe(vendors => {
            this.availableVendors = vendors;
            this.selectedVendor = vendors[0]._id;
            this.loading = false;
          });
        });
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

  addPanitia() {
    const committeesIds = this.event.committees.map(committee => committee._id);
    this.eventService
      .updateEvent(this.event._id, {
        committees: [...committeesIds, this.selectedEmployee]
      })
      .subscribe(event => {
        this.eventService.showEvent(this.event._id).subscribe(event => {
          this.event = event;
          this.committees = this.event.committees;
        });
      });
  }

  addVendor() {
    const vendorsIds = this.event.vendors.map(vendor => vendor._id);
    this.eventService
      .updateEvent(this.event._id, {
        vendors: [...vendorsIds, this.selectedVendor]
      })
      .subscribe(event => {
        this.eventService.showEvent(this.event._id).subscribe(event => {
          this.event = event;
          this.vendors = this.event.vendors;
        });
      });
  }

  addAssignment() {
    const newAssignment: IAssignment = {
      assignment: this.inputAssignment,
      isFinished: false
    };
    this.eventService
      .updateEvent(this.event._id, {
        assignments: [...this.event.assignments, newAssignment]
      })
      .subscribe(event => {
        this.eventService.showEvent(this.event._id).subscribe(event => {
          this.event = event;
          this.assignments = this.event.assignments;
          this.inputAssignment = "";
        });
      });
  }

  deletePanitia($event) {
    const committeesIds = this.event.committees.map(committee => committee._id);
    const newCommitteesIds = committeesIds.filter(id => id !== $event);
    this.eventService
      .updateEvent(this.event._id, {
        committees: newCommitteesIds
      })
      .subscribe(event => {
        this.eventService.showEvent(this.event._id).subscribe(event => {
          this.event = event;
          this.committees = this.event.committees;
        });
      });
  }

  deleteVendor($event) {
    const vendorsIds = this.event.vendors.map(committee => committee._id);
    const newVendorsIds = vendorsIds.filter(id => id !== $event);
    this.eventService
      .updateEvent(this.event._id, {
        vendors: newVendorsIds
      })
      .subscribe(event => {
        this.eventService.showEvent(this.event._id).subscribe(event => {
          this.event = event;
          this.vendors = this.event.vendors;
        });
      });
  }

  deleteAssignment($event) {
    const newAssignments = this.event.assignments.filter(
      assignment => assignment._id !== $event
    );
    this.eventService
      .updateEvent(this.event._id, {
        assignments: newAssignments
      })
      .subscribe(event => {
        this.eventService.showEvent(this.event._id).subscribe(event => {
          this.event = event;
          this.assignments = this.event.assignments;
        });
      });
  }

  setAssignment($event) {
    const newAssignments = this.event.assignments.map(assignment => {
      if (assignment._id === $event) {
        assignment.isFinished = !assignment.isFinished;
      }
      return assignment;
    });
    this.eventService
      .updateEvent(this.event._id, {
        assignments: newAssignments
      })
      .subscribe(event => {
        this.eventService.showEvent(this.event._id).subscribe(event => {
          this.event = event;
          this.assignments = this.event.assignments;
        });
      });
  }

  markAsFinished() {
    this.eventService
      .updateEvent(this.event._id, {
        isFinished: true
      })
      .subscribe(event => {
        this.event = event;
        this.router.navigate(["acara"]);
      });
  }

  deleteEvent($event) {
    this.eventService
      .deleteEvent($event)
      .subscribe(event => {
        this.router.navigate(["acara"]);
      })
  }
}

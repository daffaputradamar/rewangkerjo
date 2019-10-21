import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { EventService } from "src/app/services/event.service";
import { Router } from "@angular/router";
import { CategoryService } from "src/app/services/category.service";
import { EmployeeService } from "src/app/services/employee.service";
import { ICategory, IEmployee, IEvent } from "src/app/interfaces";

@Component({
  selector: "app-buat-acara",
  templateUrl: "./buat-acara.component.html",
  styleUrls: ["./buat-acara.component.css"]
})
export class BuatAcaraComponent implements OnInit {
  acaraForm = this.fb.group({
    client: ["", Validators.required],
    addressEvent: ["", Validators.required],
    phone: ["", Validators.required],
    category: ["1", Validators.required],
    pic: ["1", Validators.required]
  });

  categories: ICategory[];
  employees: IEmployee[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private eventService: EventService,
    private categoryService: CategoryService,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
      this.employeeService.getEmployees().subscribe(employees => {
        this.employees = employees;
        this.employees.filter(employee => employee.position === 1);
      });
    });
  }

  onSubmit() {
    if (this.acaraForm.valid) {
      const newEvent: IEvent = {
        _id: "5",
        addressEvent: this.acaraForm.value.addressEvent,
        category: this.categories.find(
          cat => cat._id === this.acaraForm.value.category
        ),
        client: this.acaraForm.value.client,
        createdAt: new Date(),
        isFinished: false,
        phone: this.acaraForm.value.phone,
        pic: this.employees.find(em => em._id === this.acaraForm.value.pic)
      };
      this.eventService.addEvent(newEvent);
      this.router.navigate(["acara"]);
    }
  }
}

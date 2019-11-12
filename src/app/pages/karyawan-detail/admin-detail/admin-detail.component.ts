import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { EmployeeService } from "src/app/services/employee.service";
import { AuthService } from "src/app/services/auth.service";
import { VendorService } from "src/app/services/vendor.service";
import { IAdmin, IVendor } from "src/app/interfaces";

@Component({
  selector: "app-admin-detail",
  templateUrl: "./admin-detail.component.html",
  styleUrls: ["./admin-detail.component.css"]
})
export class AdminDetailComponent implements OnInit {
  employee: IAdmin;
  user;
  vendors: IVendor[];

  id: string;
  editStatus = false;
  loading = false;
  isAdmin: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private vendorService: VendorService,
    private authService: AuthService,
    private router: Router
  ) {}

  deleteVendor($event) {
    this.vendorService.deleteVendor($event).subscribe(() => {
      this.vendorService.getVendors().subscribe(vendors => {
        this.vendors = vendors;
      });
    });
  }

  addVendor($event) {
    this.vendorService.addVendor($event).subscribe(() => {
      this.vendorService.getVendors().subscribe(vendors => {
        this.vendors = vendors;
      });
    });
  }

  ngOnInit() {
    this.loading = true;
    this.user = this.authService.getUser();
    this.isAdmin = this.user.position === undefined ? true : false;
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.employeeService.showAdmin(this.id).subscribe(employee => {
        this.employee = employee;
        this.vendorService.getVendors().subscribe(vendors => {
          this.vendors = vendors;
          this.loading = false;
        });
      });
    });
  }
}

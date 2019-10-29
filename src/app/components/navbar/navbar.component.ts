import { Component, OnInit, OnChanges } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { IEmployee, IAdmin } from "src/app/interfaces";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  faBars = faBars;
  user;
  isAdmin;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getLoginStatus().subscribe(status => {
      this.isLoggedIn = status;
      if (this.isLoggedIn) {
        this.user = this.authService.getUser();
        this.isAdmin = this.user.position === undefined ? true : false;
      } else {
        this.user = null;
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}

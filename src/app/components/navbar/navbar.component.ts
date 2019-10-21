import { Component, OnInit, OnChanges } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { faBars } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  faBars = faBars;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getLoginStatus().subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  logout() {
    this.authService.logout();
  }
}

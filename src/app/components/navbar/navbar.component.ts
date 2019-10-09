import { Component, OnInit, OnChanges } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn = true;
    this.authService.loginStatusUpdate.subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  logout() {
    this.authService.logout();
  }
}

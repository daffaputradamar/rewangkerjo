import { Component, OnInit, OnChanges, OnDestroy } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import { NotificationService } from "src/app/services/notification.service";
import { INotification } from "src/app/interfaces";
import { Subscription, timer } from "rxjs";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean;
  faBars = faBars;
  faBell = faBell;
  user;
  isAdmin;

  subscription: Subscription;

  notifications: INotification[] = [];
  unreadNotification = 0;

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService
  ) {}

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
    this.subscription = timer(0, 10 * 1000)
      .pipe(switchMap(() => this.notificationService.getNotifications()))
      .subscribe(notifications => {
        let unread = 0;
        this.notifications = notifications;
        notifications.forEach(notif => {
          if (!notif.isRead) {
            unread++;
          }
        });
        this.unreadNotification = unread;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadNotification() {
    this.notificationService.getNotifications().subscribe(notifications => {
      this.notifications = notifications;
      this.notificationService.updateNotifications().subscribe(success => {
        if (success) {
          setTimeout(() => {
            const newNotifications = this.notifications.map(notif => {
              notif.isRead = true;
              return notif;
            });
            this.notifications = newNotifications;
            this.unreadNotification = 0;
          }, 60 * 1000);
        }
      });
    });
  }

  logout() {
    this.authService.logout();
  }
}

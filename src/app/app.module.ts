import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BerandaComponent } from "./pages/beranda/beranda.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from "./pages/login/login.component";
import { AcaraComponent } from "./pages/acara/acara.component";
import { CategoriesComponent } from "./pages/acara/categories/categories.component";
import { CategoryItemComponent } from "./pages/acara/categories/category-item/category-item.component";
import { EventsComponent } from "./components/events/events.component";
import { EventItemComponent } from "./components/events/event-item/event-item.component";

@NgModule({
  declarations: [
    AppComponent,
    BerandaComponent,
    NavbarComponent,
    LoginComponent,
    AcaraComponent,
    CategoriesComponent,
    CategoryItemComponent,
    EventsComponent,
    EventItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

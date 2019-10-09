import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BerandaComponent } from "./pages/beranda/beranda.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from "./pages/login/login.component";
import { AcaraComponent } from "./pages/acara/acara.component";

@NgModule({
  declarations: [
    AppComponent,
    BerandaComponent,
    NavbarComponent,
    LoginComponent,
    AcaraComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

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
import { AcaraDetailComponent } from "./pages/acara-detail/acara-detail.component";
import { AcaraDeskripsiComponent } from "./pages/acara-detail/acara-deskripsi/acara-deskripsi.component";
import { PanitiaListComponent } from "./pages/acara-detail/panitia-list/panitia-list.component";
import { VendorListComponent } from "./pages/acara-detail/vendor-list/vendor-list.component";
import { PenugasanListComponent } from "./pages/acara-detail/penugasan-list/penugasan-list.component";
import { DokumenListComponent } from "./pages/acara-detail/dokumen-list/dokumen-list.component";
import { PanitiaItemComponent } from "./pages/acara-detail/panitia-list/panitia-item/panitia-item.component";
import { VendorItemComponent } from "./pages/acara-detail/vendor-list/vendor-item/vendor-item.component";
import { PenugasanItemComponent } from "./pages/acara-detail/penugasan-list/penugasan-item/penugasan-item.component";
import { EmployeeComponent } from "./components/buttons/employee/employee.component";
import { DokumenItemComponent } from "./pages/acara-detail/dokumen-list/dokumen-item/dokumen-item.component";
import { KaryawanComponent } from "./pages/karyawan/karyawan.component";
import { KaryawanListComponent } from "./pages/karyawan/karyawan-list/karyawan-list.component";
import { KaryawanCategoriesComponent } from "./pages/karyawan/karyawan-categories/karyawan-categories.component";
import { KaryawanDetailComponent } from "./pages/karyawan-detail/karyawan-detail.component";
import { BuatAcaraComponent } from "./pages/buat-acara/buat-acara.component";
import { AdminDetailComponent } from "./pages/karyawan-detail/admin-detail/admin-detail.component";

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
    EventItemComponent,
    AcaraDetailComponent,
    AcaraDeskripsiComponent,
    PanitiaListComponent,
    VendorListComponent,
    PenugasanListComponent,
    DokumenListComponent,
    PanitiaItemComponent,
    VendorItemComponent,
    PenugasanItemComponent,
    EmployeeComponent,
    DokumenItemComponent,
    KaryawanComponent,
    KaryawanListComponent,
    KaryawanCategoriesComponent,
    KaryawanDetailComponent,
    BuatAcaraComponent,
    AdminDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

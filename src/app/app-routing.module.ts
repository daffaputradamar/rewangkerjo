import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BerandaComponent } from "./pages/beranda/beranda.component";
import { LoginComponent } from "./pages/login/login.component";
import { AcaraComponent } from "./pages/acara/acara.component";
import { AcaraDetailComponent } from "./pages/acara-detail/acara-detail.component";
import { AuthIfAuthenticatedService } from "./services/auth-if-authenticated.service";
import { AuthGuardService } from "./services/auth-guard.service";
import { KaryawanComponent } from "./pages/karyawan/karyawan.component";
import { KaryawanDetailComponent } from "./pages/karyawan-detail/karyawan-detail.component";
import { BuatAcaraComponent } from "./pages/buat-acara/buat-acara.component";

const routes: Routes = [
  {
    path: "",
    component: BerandaComponent,
    canActivate: [AuthIfAuthenticatedService]
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [AuthIfAuthenticatedService]
  },
  {
    path: "acara",
    component: AcaraComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "acara-detail/:id",
    component: AcaraDetailComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "karyawan",
    component: KaryawanComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "karyawan-detail/:id",
    component: KaryawanDetailComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "buat-acara",
    component: BuatAcaraComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

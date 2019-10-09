import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BerandaComponent } from "./pages/beranda/beranda.component";
import { LoginComponent } from "./pages/login/login.component";
import { AcaraComponent } from "./pages/acara/acara.component";
import { AuthIfAuthenticatedService } from "./services/auth-if-authenticated.service";
import { AuthGuardService } from "./services/auth-guard.service";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

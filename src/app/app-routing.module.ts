import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BerandaComponent } from "./pages/beranda/beranda.component";
import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
  {
    path: "",
    component: BerandaComponent
  },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

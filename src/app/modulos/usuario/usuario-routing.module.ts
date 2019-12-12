import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsuarioComponent } from "./usuario.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "/sesion"
  },
  {
    path: "sesion",
    component: UsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UsuarioModule {}

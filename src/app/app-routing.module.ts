import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AngularFireAuthGuard } from "@angular/fire/auth-guard";
import { redirectUnauthorizedTo, canActivate } from "@angular/fire/auth-guard";

const redirectUnauthorizedToLanding = redirectUnauthorizedTo(["auth/login"]);
const routes: Routes = [
  {
    path: "",
    redirectTo: "/usuario",
    pathMatch: "full"
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./modulos/auth/auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "usuario",
    loadChildren: () =>
      import("./modulos/usuario/usuario.module").then(m => m.UsuarioModule),
      ...canActivate(redirectUnauthorizedToLanding)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

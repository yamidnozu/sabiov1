import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { RegistroComponent } from "../registro/registro.component";
// import { UsuarioComponent } from "../usuario/usuario.component";
// import { AngularFireAuthGuard } from "@angular/fire/auth-guard";
// import { redirectUnauthorizedTo, canActivate } from "@angular/fire/auth-guard";
// const redirectUnauthorizedToLanding = redirectUnauthorizedTo(["auth/login"]);
const routes: Routes = [
  
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "registro",
    component: RegistroComponent,
  },
  // {
  //   path: "usuario",
  //   component: UsuarioComponent, /* resolve: { data: UserResolver } */
  //   ...canActivate(redirectUnauthorizedToLanding)
  // }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}

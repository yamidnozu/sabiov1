import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsuarioComponent } from "./usuario.component";
import { AngularFireAuthGuard } from "@angular/fire/auth-guard";
import { redirectUnauthorizedTo, canActivate } from "@angular/fire/auth-guard";

const redirectUnauthorizedToLanding = redirectUnauthorizedTo(["auth/login"]);
const routes: Routes = [
  {
    path: "",
    component: UsuarioComponent,
    ...canActivate(redirectUnauthorizedToLanding)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule {}

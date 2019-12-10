import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "../login/login.component";
import { RegistroComponent } from "../registro/registro.component";

@NgModule({
  imports: [CommonModule, AuthRoutingModule],

  declarations: [LoginComponent, RegistroComponent],
  exports: [LoginComponent, RegistroComponent]
})
export class AuthModule {}

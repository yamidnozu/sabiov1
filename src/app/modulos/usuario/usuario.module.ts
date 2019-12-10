import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsuarioComponent } from "./usuario.component";
@NgModule({
  imports: [CommonModule],
  declarations: [UsuarioComponent],
  exports: [UsuarioComponent]
})
export class AuthModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsuarioComponent } from "./usuario.component";
import { UsuarioRoutingModule } from "./usuario-routing.module";
@NgModule({
  imports: [CommonModule, UsuarioRoutingModule],
  declarations: [UsuarioComponent],
  exports: [UsuarioComponent]
})
export class UsuarioModule {
    constructor(){
    console.log('Creando usuario module')
  }
}

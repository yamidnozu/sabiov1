import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "../login/login.component";
import { RegistroComponent } from "../registro/registro.component";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
// import { environment } from "../environments/environment";

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    //AngularFireModule.initializeApp(environment.firebase),
  ],
  declarations: [LoginComponent, RegistroComponent],
  exports: [LoginComponent, RegistroComponent]
})
export class AuthModule {}

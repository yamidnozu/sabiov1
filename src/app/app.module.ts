import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreModule } from "./core/core.module";
import { FirebaseModule } from "./core/firebase/firebase.module";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AngularFireAuthGuard } from "@angular/fire/auth-guard";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    FirebaseModule
  ],
  providers: [AngularFireAuthGuard],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

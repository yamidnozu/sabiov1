import { MatSnackBarModule } from "@angular/material/snack-bar";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AuthModule } from './../modulos/auth/auth/auth.module';
import { Routes, RouterModule } from "@angular/router";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    FormsModule,
    AuthModule
  ],
  providers: [
    /*No usar ésta sección*/
  ],
  exports: [FlexLayoutModule, ReactiveFormsModule, FormsModule, AuthModule]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}

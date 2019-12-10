import { MatSnackBarModule } from "@angular/material/snack-bar";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    FormsModule
  ],
  providers: [
    /*No usar ésta sección*/
  ],
  exports: [FlexLayoutModule, ReactiveFormsModule, FormsModule]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}

import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared/shared.module";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { ToolbarComponent } from "./layout/toolbar/toolbar.component";
import { MaterialModule } from "./../material.module";

@NgModule({
  declarations: [ToolbarComponent, NavbarComponent],
  imports: [CommonModule, RouterModule, MaterialModule, SharedModule.forRoot()],
  exports: [ToolbarComponent, NavbarComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error("Ya ha importado antes CoreModule");
    }
  }
}

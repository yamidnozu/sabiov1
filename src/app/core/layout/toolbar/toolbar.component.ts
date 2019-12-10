import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { LayoutService } from '../layout.service';
import { Observable } from "rxjs";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"]
})
export class ToolbarComponent implements OnInit {
  @Input()
  titulo = "";
  isOpenSidenav$ = this.ls.navarVisible$;

  constructor(private ls: LayoutService) {}

  ngOnInit() {}

  onClickMenu() {
    this.ls.cambiarVisibilidad();
  }
}

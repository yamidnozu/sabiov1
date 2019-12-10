import { tap, map } from "rxjs/internal/operators";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { MenuItem } from "../menu-item.model";
import { LayoutService } from "../layout.service";
import { MatMenuTrigger } from "@angular/material";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  titulo = ":>";
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      tap(ocultar => {
        this.ls.cambiarVisibilidadEvento(!ocultar);
      })
    );

  submenuFamInt: MenuItem[] = [
    {
      icono: "post_add",
      titulo: "Listamiento de pacientes",
      ruta: "/unidosis/alistamiento-pacientes"
    },
    {
      icono: "store",
      titulo: "Listamiento de medicamentos",
      ruta: "/unidosis/alistamiento-medicamentos"
    },
    {
      icono: "bar_chart",
      titulo: "Planes de tratamiento",
      ruta: "/unidosis/planes-tratamiento"
    }
  ];

  menuItems: MenuItem[] = [
    {
      icono: "store",
      titulo: "Farmacia intrahospitalaria",
      submenu: this.submenuFamInt
    },
    // {
    //   titulo: 'Inicio', ruta: '/home'
    // }, {
    //   icono: 'event_note', titulo: 'Carga de trabajo', ruta: ''
    // },
    {
      icono: "bar_chart",
      titulo: "Gestion Producto",
      ruta: "gestor-medicamentos/gestion-producto"
    },
    {
      icono: "table_chart",
      titulo: "Tabulador",
      ruta: "gestor-medicamentos/tabulador"
    }
  ];

  isOpenSidenav$ = this.ls.navarVisible$;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private ls: LayoutService
  ) {}

  ngOnInit() {}

  navbarCerrada() {
    //this.ls.cambiarVisibilidadEvento(false);
  }
}

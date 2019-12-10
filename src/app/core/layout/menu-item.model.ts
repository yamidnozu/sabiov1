export interface MenuItem {
  icono?: string;
  titulo: string;
  ruta?: string;
  submenu?: MenuItem[];
}

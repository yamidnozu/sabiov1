import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private navarEsVisible = true;
  private readonly navbarVisibleSubject$ = new BehaviorSubject<boolean>(this.navarEsVisible);
  readonly navarVisible$ = this.navbarVisibleSubject$.asObservable();

  constructor() { }

  cambiarVisibilidad() {
    this.navarEsVisible = !this.navarEsVisible;
    this.navbarVisibleSubject$.next(this.navarEsVisible);
  }

  cambiarVisibilidadEvento(visible: boolean) {
    this.navarEsVisible = visible;
    this.navbarVisibleSubject$.next(this.navarEsVisible);
  }

}

import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Campeones', url: '/campeones', icon: 'chevron-forward' },
    { title: 'Objetos', url: '/objetos', icon: 'chevron-forward' },
    { title: 'Runas', url: '/runas', icon: 'chevron-forward' },
    { title: 'Parches', url: '/parches', icon: 'chevron-forward' },
    { title: 'Noticias', url: '/noticias', icon: 'chevron-forward' },
    { title: 'Modos de juego', url: '/modos-de-juego', icon: 'chevron-forward' },
    { title: 'Mapas', url: '/mapas', icon: 'chevron-forward' },
    { title: 'Guias', url: '/guias', icon: 'chevron-forward' },
    { title: 'Acceder', url: '/iniciar-sesion', icon: 'chevron-forward' },
  ];

  constructor() {}
}

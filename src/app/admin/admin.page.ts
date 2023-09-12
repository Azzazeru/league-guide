import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToCrudCampeones() {
    this.router.navigate(['/crud-campeon']);
  }

  redirectToCrudItems() {
    this.router.navigate(['/crud-item']);
  }

  redirectToCrudMapas() {
    this.router.navigate(['/crud-mapa']);
  }

  redirectToCrudModos() {
    this.router.navigate(['/crud-modo']);
  }

  redirectToCrudNoticias() {
    this.router.navigate(['/crud-noticia']);
  }

} 

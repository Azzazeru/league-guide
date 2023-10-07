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

    usuarios() {
        this.router.navigate(['/usuario-list']);
    }

    campeones() {
        this.router.navigate(['/campeon-list']);
    }

    items() {
        this.router.navigate(['/item-list']);
    }
    
    mapas() {
        this.router.navigate(['/mapa-list']);
    }
    
    modos() {
        this.router.navigate(['/modo-list']);
    }
    
    noticias() {
        this.router.navigate(['/noticia-list']);
    }
    
    habilidadesCampeones() {
        this.router.navigate(['/habilidad-campeon-list']);
    }
    
    divisiones() {
        this.router.navigate(['/division-list']);
    }
    
    runas() {
        this.router.navigate(['/runa-list']);
    }
    
    drakes() {
        this.router.navigate(['/drake-list']);
    }
    
    skinsCampeones() {
        this.router.navigate(['/skin-campeon-list']);
    }
    
    botines() {
        this.router.navigate(['/botin-list']);
    }
    
    escencias() {
        this.router.navigate(['/escencia-list']);
    }
    
    hechizos() {
        this.router.navigate(['/hechizo-list']);
    }
    
    monstruosJG() {
        this.router.navigate(['/monstruoJg-list']);
    }
    
    baratijasVision() {
        this.router.navigate(['/baratijaVision-list']);
    }
    

} 

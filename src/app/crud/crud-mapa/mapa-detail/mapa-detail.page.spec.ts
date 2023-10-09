import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapaDetailPage } from './mapa-detail.page';

describe('MapaDetailPage', () => {
    let component: MapaDetailPage;
    let fixture: ComponentFixture<MapaDetailPage>;

    beforeEach(async(() => {
        fixture = TestBed.createComponent(MapaDetailPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

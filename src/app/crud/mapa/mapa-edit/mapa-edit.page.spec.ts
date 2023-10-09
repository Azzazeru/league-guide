import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapaEditPage } from './mapa-edit.page';

describe('MapaEditPage', () => {
  let component: MapaEditPage;
  let fixture: ComponentFixture<MapaEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MapaEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

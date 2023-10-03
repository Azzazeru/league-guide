import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapaListPage } from './mapa-list.page';

describe('MapaListPage', () => {
  let component: MapaListPage;
  let fixture: ComponentFixture<MapaListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MapaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapaAddPage } from './mapa-add.page';

describe('MapaAddPage', () => {
  let component: MapaAddPage;
  let fixture: ComponentFixture<MapaAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MapaAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

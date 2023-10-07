import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapaAllPage } from './mapa-all.page';

describe('MapaAllPage', () => {
  let component: MapaAllPage;
  let fixture: ComponentFixture<MapaAllPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MapaAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

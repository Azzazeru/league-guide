import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HabilidadCampeonAllPage } from './habilidad-campeon-all.page';

describe('HabilidadCampeonAllPage', () => {
  let component: HabilidadCampeonAllPage;
  let fixture: ComponentFixture<HabilidadCampeonAllPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HabilidadCampeonAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

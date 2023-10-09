import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HabilidadCampeonEditPage } from './habilidad-campeon-edit.page';

describe('HabilidadCampeonEditPage', () => {
  let component: HabilidadCampeonEditPage;
  let fixture: ComponentFixture<HabilidadCampeonEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HabilidadCampeonEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

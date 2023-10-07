import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HabilidadCampeonAddPage } from './habilidad-campeon-add.page';

describe('HabilidadCampeonAddPage', () => {
  let component: HabilidadCampeonAddPage;
  let fixture: ComponentFixture<HabilidadCampeonAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HabilidadCampeonAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

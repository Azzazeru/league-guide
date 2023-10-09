import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HabilidadCampeonListPage } from './habilidad-campeon-list.page';

describe('HabilidadCampeonListPage', () => {
  let component: HabilidadCampeonListPage;
  let fixture: ComponentFixture<HabilidadCampeonListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HabilidadCampeonListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HabilidadCampeonDetailPage } from './habilidad-campeon-detail.page';

describe('HabilidadCampeonDetailPage', () => {
  let component: HabilidadCampeonDetailPage;
  let fixture: ComponentFixture<HabilidadCampeonDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HabilidadCampeonDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

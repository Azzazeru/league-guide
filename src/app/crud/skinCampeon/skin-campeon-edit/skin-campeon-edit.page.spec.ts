import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkinCampeonEditPage } from './skin-campeon-edit.page';

describe('SkinCampeonEditPage', () => {
  let component: SkinCampeonEditPage;
  let fixture: ComponentFixture<SkinCampeonEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SkinCampeonEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

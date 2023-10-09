import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkinCampeonAllPage } from './skin-campeon-all.page';

describe('SkinCampeonAllPage', () => {
  let component: SkinCampeonAllPage;
  let fixture: ComponentFixture<SkinCampeonAllPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SkinCampeonAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

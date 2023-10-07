import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkinCampeonAddPage } from './skin-campeon-add.page';

describe('SkinCampeonAddPage', () => {
  let component: SkinCampeonAddPage;
  let fixture: ComponentFixture<SkinCampeonAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SkinCampeonAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

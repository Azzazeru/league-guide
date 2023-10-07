import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkinCampeonListPage } from './skin-campeon-list.page';

describe('SkinCampeonListPage', () => {
  let component: SkinCampeonListPage;
  let fixture: ComponentFixture<SkinCampeonListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SkinCampeonListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

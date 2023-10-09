import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkinCampeonDetailPage } from './skin-campeon-detail.page';

describe('SkinCampeonDetailPage', () => {
  let component: SkinCampeonDetailPage;
  let fixture: ComponentFixture<SkinCampeonDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SkinCampeonDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CampeonDetailPage } from './campeon-detail.page';

describe('CampeonDetailPage', () => {
  let component: CampeonDetailPage;
  let fixture: ComponentFixture<CampeonDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CampeonDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

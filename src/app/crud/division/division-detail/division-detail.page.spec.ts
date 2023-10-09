import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DivisionDetailPage } from './division-detail.page';

describe('DivisionDetailPage', () => {
  let component: DivisionDetailPage;
  let fixture: ComponentFixture<DivisionDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DivisionDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

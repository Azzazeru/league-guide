import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DivisionListPage } from './division-list.page';

describe('DivisionListPage', () => {
  let component: DivisionListPage;
  let fixture: ComponentFixture<DivisionListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DivisionListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

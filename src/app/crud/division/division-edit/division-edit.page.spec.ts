import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DivisionEditPage } from './division-edit.page';

describe('DivisionEditPage', () => {
  let component: DivisionEditPage;
  let fixture: ComponentFixture<DivisionEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DivisionEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DivisionAddPage } from './division-add.page';

describe('DivisionAddPage', () => {
  let component: DivisionAddPage;
  let fixture: ComponentFixture<DivisionAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DivisionAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

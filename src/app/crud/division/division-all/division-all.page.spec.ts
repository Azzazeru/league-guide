import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DivisionAllPage } from './division-all.page';

describe('DivisionAllPage', () => {
  let component: DivisionAllPage;
  let fixture: ComponentFixture<DivisionAllPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DivisionAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModoEditPage } from './modo-edit.page';

describe('ModoEditPage', () => {
  let component: ModoEditPage;
  let fixture: ComponentFixture<ModoEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModoEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

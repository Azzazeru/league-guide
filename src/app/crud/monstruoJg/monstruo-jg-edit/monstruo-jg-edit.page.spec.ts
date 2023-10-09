import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonstruoJgEditPage } from './monstruo-jg-edit.page';

describe('MonstruoJgEditPage', () => {
  let component: MonstruoJgEditPage;
  let fixture: ComponentFixture<MonstruoJgEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MonstruoJgEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonstruoJgAllPage } from './monstruo-jg-all.page';

describe('MonstruoJgAllPage', () => {
  let component: MonstruoJgAllPage;
  let fixture: ComponentFixture<MonstruoJgAllPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MonstruoJgAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

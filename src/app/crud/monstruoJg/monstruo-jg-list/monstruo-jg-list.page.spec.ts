import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonstruoJgListPage } from './monstruo-jg-list.page';

describe('MonstruoJgListPage', () => {
  let component: MonstruoJgListPage;
  let fixture: ComponentFixture<MonstruoJgListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MonstruoJgListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

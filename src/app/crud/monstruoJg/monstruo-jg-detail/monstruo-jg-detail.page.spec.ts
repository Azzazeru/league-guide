import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonstruoJgDetailPage } from './monstruo-jg-detail.page';

describe('MonstruoJgDetailPage', () => {
  let component: MonstruoJgDetailPage;
  let fixture: ComponentFixture<MonstruoJgDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MonstruoJgDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

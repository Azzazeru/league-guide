import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModoDetailPage } from './modo-detail.page';

describe('ModoDetailPage', () => {
  let component: ModoDetailPage;
  let fixture: ComponentFixture<ModoDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModoDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

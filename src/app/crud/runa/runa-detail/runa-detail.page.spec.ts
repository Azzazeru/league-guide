import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RunaDetailPage } from './runa-detail.page';

describe('RunaDetailPage', () => {
  let component: RunaDetailPage;
  let fixture: ComponentFixture<RunaDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RunaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

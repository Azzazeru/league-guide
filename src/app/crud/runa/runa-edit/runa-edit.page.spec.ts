import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RunaEditPage } from './runa-edit.page';

describe('RunaEditPage', () => {
  let component: RunaEditPage;
  let fixture: ComponentFixture<RunaEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RunaEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

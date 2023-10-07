import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RunaAddPage } from './runa-add.page';

describe('RunaAddPage', () => {
  let component: RunaAddPage;
  let fixture: ComponentFixture<RunaAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RunaAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

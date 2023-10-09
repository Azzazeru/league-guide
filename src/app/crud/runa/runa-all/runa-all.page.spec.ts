import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RunaAllPage } from './runa-all.page';

describe('RunaAllPage', () => {
  let component: RunaAllPage;
  let fixture: ComponentFixture<RunaAllPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RunaAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

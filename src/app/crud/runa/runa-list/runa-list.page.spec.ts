import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RunaListPage } from './runa-list.page';

describe('RunaListPage', () => {
  let component: RunaListPage;
  let fixture: ComponentFixture<RunaListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RunaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

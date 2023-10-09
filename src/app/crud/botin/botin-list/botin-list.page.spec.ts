import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BotinListPage } from './botin-list.page';

describe('BotinListPage', () => {
  let component: BotinListPage;
  let fixture: ComponentFixture<BotinListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BotinListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

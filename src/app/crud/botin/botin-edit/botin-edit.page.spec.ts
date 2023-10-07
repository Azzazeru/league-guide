import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BotinEditPage } from './botin-edit.page';

describe('BotinEditPage', () => {
  let component: BotinEditPage;
  let fixture: ComponentFixture<BotinEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BotinEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BotinAddPage } from './botin-add.page';

describe('BotinAddPage', () => {
  let component: BotinAddPage;
  let fixture: ComponentFixture<BotinAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BotinAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

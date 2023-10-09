import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BotinAllPage } from './botin-all.page';

describe('BotinAllPage', () => {
  let component: BotinAllPage;
  let fixture: ComponentFixture<BotinAllPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BotinAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

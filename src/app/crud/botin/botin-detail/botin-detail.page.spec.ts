import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BotinDetailPage } from './botin-detail.page';

describe('BotinDetailPage', () => {
  let component: BotinDetailPage;
  let fixture: ComponentFixture<BotinDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BotinDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

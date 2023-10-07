import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemAllPage } from './item-all.page';

describe('ItemAllPage', () => {
  let component: ItemAllPage;
  let fixture: ComponentFixture<ItemAllPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ItemAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

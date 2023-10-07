import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModoAddPage } from './modo-add.page';

describe('ModoAddPage', () => {
  let component: ModoAddPage;
  let fixture: ComponentFixture<ModoAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModoAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

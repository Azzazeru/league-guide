import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModoAllPage } from './modo-all.page';

describe('ModoAllPage', () => {
  let component: ModoAllPage;
  let fixture: ComponentFixture<ModoAllPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModoAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

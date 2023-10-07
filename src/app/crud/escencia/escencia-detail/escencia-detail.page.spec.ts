import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscenciaDetailPage } from './escencia-detail.page';

describe('EscenciaDetailPage', () => {
  let component: EscenciaDetailPage;
  let fixture: ComponentFixture<EscenciaDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EscenciaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

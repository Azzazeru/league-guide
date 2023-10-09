import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscenciaListPage } from './escencia-list.page';

describe('EscenciaListPage', () => {
  let component: EscenciaListPage;
  let fixture: ComponentFixture<EscenciaListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EscenciaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteActualizarPage } from './crud-modificar-mapa.page';

describe('CrudActualizarCampeonPage', () => {
  let component: ClienteActualizarPage;
  let fixture: ComponentFixture<ClienteActualizarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClienteActualizarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

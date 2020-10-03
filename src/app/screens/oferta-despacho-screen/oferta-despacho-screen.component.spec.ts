import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaDespachoScreenComponent } from './oferta-despacho-screen.component';

describe('OfertaDespachoScreenComponent', () => {
  let component: OfertaDespachoScreenComponent;
  let fixture: ComponentFixture<OfertaDespachoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertaDespachoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaDespachoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

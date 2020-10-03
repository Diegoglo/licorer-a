import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiepaginaScreenComponent } from './piepagina-screen.component';

describe('PiepaginaScreenComponent', () => {
  let component: PiepaginaScreenComponent;
  let fixture: ComponentFixture<PiepaginaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiepaginaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiepaginaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

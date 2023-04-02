import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfegirGastoComponent } from './afegir-gasto.component';

describe('AfegirGastoComponent', () => {
  let component: AfegirGastoComponent;
  let fixture: ComponentFixture<AfegirGastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfegirGastoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfegirGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfegirAmicComponent } from './afegir-amic.component';

describe('AfegirAmicComponent', () => {
  let component: AfegirAmicComponent;
  let fixture: ComponentFixture<AfegirAmicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfegirAmicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfegirAmicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

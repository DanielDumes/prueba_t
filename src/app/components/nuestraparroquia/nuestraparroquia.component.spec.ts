import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestraparroquiaComponent } from './nuestraparroquia.component';

describe('NuestraparroquiaComponent', () => {
  let component: NuestraparroquiaComponent;
  let fixture: ComponentFixture<NuestraparroquiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuestraparroquiaComponent]
    });
    fixture = TestBed.createComponent(NuestraparroquiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

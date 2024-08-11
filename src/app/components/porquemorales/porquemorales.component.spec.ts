import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorquemoralesComponent } from './porquemorales.component';

describe('PorquemoralesComponent', () => {
  let component: PorquemoralesComponent;
  let fixture: ComponentFixture<PorquemoralesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorquemoralesComponent]
    });
    fixture = TestBed.createComponent(PorquemoralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

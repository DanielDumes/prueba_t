import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneatuvisitaComponent } from './planeatuvisita.component';

describe('PlaneatuvisitaComponent', () => {
  let component: PlaneatuvisitaComponent;
  let fixture: ComponentFixture<PlaneatuvisitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaneatuvisitaComponent]
    });
    fixture = TestBed.createComponent(PlaneatuvisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

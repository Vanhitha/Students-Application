import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Securitysetings } from './securitysetings';

describe('Securitysetings', () => {
  let component: Securitysetings;
  let fixture: ComponentFixture<Securitysetings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Securitysetings],
    }).compileComponents();

    fixture = TestBed.createComponent(Securitysetings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

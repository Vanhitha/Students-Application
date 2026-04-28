import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStaf } from './add-staf';

describe('AddStaf', () => {
  let component: AddStaf;
  let fixture: ComponentFixture<AddStaf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddStaf],
    }).compileComponents();

    fixture = TestBed.createComponent(AddStaf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

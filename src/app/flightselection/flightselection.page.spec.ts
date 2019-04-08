import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightselectionPage } from './flightselection.page';

describe('FlightselectionPage', () => {
  let component: FlightselectionPage;
  let fixture: ComponentFixture<FlightselectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightselectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightselectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

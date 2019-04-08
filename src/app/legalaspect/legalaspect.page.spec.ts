import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalaspectPage } from './legalaspect.page';

describe('LegalaspectPage', () => {
  let component: LegalaspectPage;
  let fixture: ComponentFixture<LegalaspectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalaspectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalaspectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

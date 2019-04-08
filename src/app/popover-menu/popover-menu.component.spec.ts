import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverMenuPage } from './popover-menu.page';

describe('PopoverMenuPage', () => {
  let component: PopoverMenuPage;
  let fixture: ComponentFixture<PopoverMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardingpassPage } from './boardingpass.page';

describe('BoardingpassPage', () => {
  let component: BoardingpassPage;
  let fixture: ComponentFixture<BoardingpassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardingpassPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardingpassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiscosInterferenciasCgcontPage } from './riscos_interferencias_cgcont.page';

describe('RiscosInterferenciasCgcontPage', () => {
  let component: RiscosInterferenciasCgcontPage;
  let fixture: ComponentFixture<RiscosInterferenciasCgcontPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiscosInterferenciasCgcontPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiscosInterferenciasCgcontPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

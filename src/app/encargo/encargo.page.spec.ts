import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncargoPage } from './encargo.page';

describe('EncargoPage', () => {
  let component: EncargoPage;
  let fixture: ComponentFixture<EncargoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncargoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncargoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

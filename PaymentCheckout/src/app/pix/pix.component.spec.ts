/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PixComponent } from './pix.component';

describe('PixComponent', () => {
  let component: PixComponent;
  let fixture: ComponentFixture<PixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

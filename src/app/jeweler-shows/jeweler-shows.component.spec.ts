/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JewelerShowsComponent } from './jeweler-shows.component';

describe('JewelerShowsComponent', () => {
  let component: JewelerShowsComponent;
  let fixture: ComponentFixture<JewelerShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JewelerShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JewelerShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

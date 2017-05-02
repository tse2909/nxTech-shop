import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxPageTopComponent } from './nx-page-top.component';

describe('NxPageTopComponent', () => {
  let component: NxPageTopComponent;
  let fixture: ComponentFixture<NxPageTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxPageTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxPageTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

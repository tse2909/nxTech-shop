import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxCartNavbarComponent } from './nx-cart-navbar.component';

describe('NxCartNavbarComponent', () => {
  let component: NxCartNavbarComponent;
  let fixture: ComponentFixture<NxCartNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxCartNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxCartNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

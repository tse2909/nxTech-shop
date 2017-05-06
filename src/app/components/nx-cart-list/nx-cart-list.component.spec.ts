import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxCartListComponent } from './nx-cart-list.component';

describe('NxCartListComponent', () => {
  let component: NxCartListComponent;
  let fixture: ComponentFixture<NxCartListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxCartListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxCartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

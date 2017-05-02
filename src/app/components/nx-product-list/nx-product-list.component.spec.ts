import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxProductListComponent } from './nx-product-list.component';

describe('NxProductListComponent', () => {
  let component: NxProductListComponent;
  let fixture: ComponentFixture<NxProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

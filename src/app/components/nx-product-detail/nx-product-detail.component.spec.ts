import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxProductDetailComponent } from './nx-product-detail.component';

describe('NxProductDetailComponent', () => {
  let component: NxProductDetailComponent;
  let fixture: ComponentFixture<NxProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxProductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

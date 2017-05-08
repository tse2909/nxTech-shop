import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxPageFooterComponent } from './nx-page-footer.component';

describe('NxPageFooterComponent', () => {
  let component: NxPageFooterComponent;
  let fixture: ComponentFixture<NxPageFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxPageFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxPageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxMenuItemComponent } from './nx-menu-item.component';

describe('NxMenuItemComponent', () => {
  let component: NxMenuItemComponent;
  let fixture: ComponentFixture<NxMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

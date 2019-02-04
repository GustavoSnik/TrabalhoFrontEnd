import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriordesignComponent } from './interiordesign.component';

describe('InteriordesignComponent', () => {
  let component: InteriordesignComponent;
  let fixture: ComponentFixture<InteriordesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteriordesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriordesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

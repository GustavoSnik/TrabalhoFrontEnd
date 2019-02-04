import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParavoceComponent } from './paravoce.component';

describe('ParavoceComponent', () => {
  let component: ParavoceComponent;
  let fixture: ComponentFixture<ParavoceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParavoceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParavoceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

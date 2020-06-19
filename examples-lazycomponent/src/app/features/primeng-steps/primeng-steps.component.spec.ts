import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengStepsComponent } from './primeng-steps.component';

describe('PrimengStepsComponent', () => {
  let component: PrimengStepsComponent;
  let fixture: ComponentFixture<PrimengStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

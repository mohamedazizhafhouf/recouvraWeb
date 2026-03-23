import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorTooltip } from './error-tooltip';

describe('ErrorTooltip', () => {
  let component: ErrorTooltip;
  let fixture: ComponentFixture<ErrorTooltip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorTooltip],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorTooltip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

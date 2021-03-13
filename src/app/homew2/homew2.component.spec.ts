import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homew2Component } from './homew2.component';

describe('Homew2Component', () => {
  let component: Homew2Component;
  let fixture: ComponentFixture<Homew2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homew2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Homew2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

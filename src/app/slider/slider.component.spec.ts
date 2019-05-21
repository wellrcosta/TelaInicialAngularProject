import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SLIDERComponent } from './slider.component';

describe('SLIDERComponent', () => {
  let component: SLIDERComponent;
  let fixture: ComponentFixture<SLIDERComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SLIDERComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SLIDERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

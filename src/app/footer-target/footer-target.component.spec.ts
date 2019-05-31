import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FooterTargetComponent} from './footer-target.component';

describe('FooterTargetComponent', () => {
  let component: FooterTargetComponent;
  let fixture: ComponentFixture<FooterTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterTargetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

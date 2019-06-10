import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Aniversarios2Component} from './aniversarios2.component';

describe('Aniversarios2Component', () => {
  let component: Aniversarios2Component;
  let fixture: ComponentFixture<Aniversarios2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Aniversarios2Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aniversarios2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

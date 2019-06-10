import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AniversarioSKAComponent} from './aniversario-ska.component';

describe('AniversarioSKAComponent', () => {
  let component: AniversarioSKAComponent;
  let fixture: ComponentFixture<AniversarioSKAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AniversarioSKAComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AniversarioSKAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

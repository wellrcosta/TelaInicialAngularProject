import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkaInterligadaComponent } from './ska-interligada.component';

describe('SkaInterligadaComponent', () => {
  let component: SkaInterligadaComponent;
  let fixture: ComponentFixture<SkaInterligadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkaInterligadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkaInterligadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

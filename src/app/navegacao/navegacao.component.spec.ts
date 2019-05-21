import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NAVEGACAOComponent } from './navegacao.component';

describe('NAVEGACAOComponent', () => {
  let component: NAVEGACAOComponent;
  let fixture: ComponentFixture<NAVEGACAOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NAVEGACAOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NAVEGACAOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

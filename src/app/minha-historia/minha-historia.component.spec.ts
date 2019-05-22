import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaHistoriaComponent } from './minha-historia.component';

describe('MinhaHistoriaComponent', () => {
  let component: MinhaHistoriaComponent;
  let fixture: ComponentFixture<MinhaHistoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhaHistoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

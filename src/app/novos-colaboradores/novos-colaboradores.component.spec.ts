import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovosColaboradoresComponent } from './novos-colaboradores.component';

describe('NovosColaboradoresComponent', () => {
  let component: NovosColaboradoresComponent;
  let fixture: ComponentFixture<NovosColaboradoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovosColaboradoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovosColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

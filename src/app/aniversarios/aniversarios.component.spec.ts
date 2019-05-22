import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AniversariosComponent } from './aniversarios.component';

describe('AniversariosComponent', () => {
  let component: AniversariosComponent;
  let fixture: ComponentFixture<AniversariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AniversariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AniversariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

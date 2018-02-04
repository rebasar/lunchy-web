import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchyComponent } from './lunchy.component';

describe('LunchyComponent', () => {
  let component: LunchyComponent;
  let fixture: ComponentFixture<LunchyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

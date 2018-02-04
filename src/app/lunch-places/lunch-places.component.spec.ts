import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchPlacesComponent } from './lunch-places.component';

describe('LunchPlacesComponent', () => {
  let component: LunchPlacesComponent;
  let fixture: ComponentFixture<LunchPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

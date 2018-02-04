import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchItemListComponent } from './lunch-item-list.component';

describe('LunchItemListComponent', () => {
  let component: LunchItemListComponent;
  let fixture: ComponentFixture<LunchItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LunchPlace } from '../lunchy/lunch_place';

@Component({
  selector: 'app-lunch-places',
  templateUrl: './lunch-places.component.html',
  styleUrls: ['./lunch-places.component.css']
})
export class LunchPlacesComponent implements OnInit {

  @Input() places: LunchPlace[] = [];
  @Output() change: EventEmitter<LunchPlace> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changePlace(place: LunchPlace): void {
    this.change.emit(place);
  }

}

import { Component, OnInit } from '@angular/core';

import { LunchPlace } from './lunch_place';
import { LunchItem } from './lunch';
import { LunchyBackendService } from '../lunchy-backend.service';
import { LunchRef } from './lunch_ref';

@Component({
  selector: 'app-lunchy',
  templateUrl: './lunchy.component.html',
  styleUrls: ['./lunchy.component.css']
})
export class LunchyComponent implements OnInit {

  places: LunchPlace[] = [];
  selectedPlace?: LunchPlace;
  lunch: LunchRef = LunchRef.notLoaded();

  constructor(private lunchyBackendService: LunchyBackendService) { }

  ngOnInit() {
    this.getLunchPlaces();
  }

  getLunchPlaces() {
    this.lunchyBackendService.fetchLunchPlaces().subscribe(places => this.places = places);
  }

  changeSelectedPlace(place: LunchPlace): void {
    this.selectedPlace = place;
    this.fetchLunchItems(place);
  }

  fetchLunchItems(place: LunchPlace): void {
    this.lunchyBackendService.fetchLunchItems(place).subscribe(lunch => this.lunch = lunch);
  }

}

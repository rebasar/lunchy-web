import { Component, OnInit } from '@angular/core';

import { LunchPlace } from './lunch_place';
import { LunchItem } from './lunch';
import { LunchyBackendService } from '../lunchy-backend.service';

@Component({
  selector: 'app-lunchy',
  templateUrl: './lunchy.component.html',
  styleUrls: ['./lunchy.component.css']
})
export class LunchyComponent implements OnInit {

  places: LunchPlace[] = [];
  items: LunchItem[];

  constructor(private lunchyBackendService: LunchyBackendService) { }

  ngOnInit() {
    this.getLunchPlaces();
  }

  getLunchPlaces() {
    this.lunchyBackendService.fetchLunchPlaces().subscribe(places => this.places = places);
  }

  fetchLunchItems(place: LunchPlace): void {
    this.lunchyBackendService.fetchLunchItems(place).subscribe(items => this.items = items);
  }

}

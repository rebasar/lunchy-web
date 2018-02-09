import { Injectable } from '@angular/core';
import { LunchPlace } from './lunchy/lunch_place';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { LunchItem, Lunch } from './lunchy/lunch';
import { HttpClient } from '@angular/common/http';

const PLACES: LunchPlace[] = [
  {
    name: 'Barabicu',
    uri: 'https://lunchy.nu/lunch/barabicu',
    website: 'http://barabicu.se'
  },
  {
    'name': 'Tacos & Tequila',
    'uri': 'https://lunchy.nu/lunch/tacos',
    'website': 'https://www.tacosandtequila.se/'
  }];

const BARRAN: LunchItem[] = [
  { title: 'Wallenbergare', description: 'Yummy!', price: 115 },
  { title: 'Beef Chuck', description: 'Chuckity chuck chuck', price: 115 }
];

const TACOS: LunchItem[] = [
  { title: 'Wallenbergare 2', description: 'Yummy!', price: 115 },
  { title: 'Beef Chuck 2', description: 'Chuckity chuck chuck', price: 115 }
];

@Injectable()
export class LunchyBackendService {

  constructor(private httpClient: HttpClient) { }

  fetchLunchPlaces(): Observable<LunchPlace[]> {
    return this.httpClient.get<LunchPlace[]>('https://lunchy.nu/lunch');
  }

  fetchLunchItems(place: LunchPlace): Observable<Lunch> {
    return this.httpClient.get<Lunch>(place.uri);
  }

}

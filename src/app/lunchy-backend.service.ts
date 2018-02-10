import { Injectable } from '@angular/core';
import { LunchPlace } from './lunchy/lunch_place';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { LunchItem, Lunch } from './lunchy/lunch';
import { HttpClient } from '@angular/common/http';

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

import { Injectable } from '@angular/core';
import { LunchPlace } from './lunchy/lunch_place';
import { LunchRef } from './lunchy/lunch_ref';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LunchItem, Lunch } from './lunchy/lunch';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LunchyBackendService {

  constructor(private httpClient: HttpClient) { }

  fetchLunchPlaces(): Observable<LunchPlace[]> {
    return this.httpClient.get<LunchPlace[]>('https://lunchy.nu/lunch');
  }

  fetchLunchItems(place: LunchPlace): Observable<LunchRef> {
    return this
      .httpClient
      .get<Lunch>(place.uri)
      .pipe(map((lunch: Lunch) => LunchRef.success(lunch)))
      .pipe(catchError(this.handleError('fetchLunchItems', LunchRef.error())));
  }

  private handleError<T>(operation = 'op', result?: T) {
    return (error: any): Observable<T> => {
      console.log(operation + ' failed');
      return of(result);
    };
  }

}

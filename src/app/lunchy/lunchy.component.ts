import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';

import { LunchPlace } from './lunch_place';
import { LunchItem } from './lunch';
import { LunchyBackendService } from '../lunchy-backend.service';
import { LunchRef } from './lunch_ref';
import { GoogleLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-lunchy',
  templateUrl: './lunchy.component.html',
  styleUrls: ['./lunchy.component.css']
})
export class LunchyComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;
  places: LunchPlace[] = [];
  selectedPlace?: LunchPlace;
  lunch: LunchRef = LunchRef.notLoaded();

  constructor(private lunchyBackendService: LunchyBackendService, private authService: AuthService) { }

  ngOnInit() {
    this.getLunchPlaces();
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
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

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

}

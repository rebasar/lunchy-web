import { Component, OnInit, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';

import { LunchPlace } from './lunch_place';
import { LunchItem } from './lunch';
import { LunchyBackendService } from '../lunchy-backend.service';
import { LunchRef } from './lunch_ref';
import { GoogleLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-lunchy',
  templateUrl: './lunchy.component.html',
  styleUrls: ['./lunchy.component.css']
})
export class LunchyComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  _mobileQueryListener: () => void;
  user: SocialUser;
  loggedIn: boolean;
  places: LunchPlace[] = [];
  selectedPlace?: LunchPlace;
  lunch: LunchRef = LunchRef.notLoaded();
  @ViewChild('nav', { static: true }) nav: MatSidenav;

  constructor(private lunchyBackendService: LunchyBackendService,
    private authService: SocialAuthService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.getLunchPlaces();
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  getLunchPlaces() {
    this.lunchyBackendService.fetchLunchPlaces().subscribe(places => this.places = places);
  }

  changeSelectedPlace(place: LunchPlace): void {
    this.selectedPlace = place;
    this.fetchLunchItems(place);
    if (this.mobileQuery.matches && this.nav) {
      this.nav.close();
    }
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatList,
  MatListItem,
  MatListModule
} from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

import { AppComponent } from './app.component';
import { LunchyComponent } from './lunchy/lunchy.component';
import { LunchItemListComponent } from './lunch-item-list/lunch-item-list.component';
import { LunchItemComponent } from './lunch-item/lunch-item.component';
import { LunchPlacesComponent } from './lunch-places/lunch-places.component';
import { LunchyBackendService } from './lunchy-backend.service';
import { config } from './config';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { RatingsComponent } from './ratings/ratings.component';
import { from } from 'rxjs';

const authConfig: SocialAuthServiceConfig = {
  autologin: false,
  providers: [
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(config.googleClientId)
  }]} as SocialAuthServiceConfig;

@NgModule({
  declarations: [
    AppComponent,
    LunchyComponent,
    LunchItemListComponent,
    LunchItemComponent,
    LunchPlacesComponent,
    RatingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [LunchyBackendService,
    MediaMatcher,
    AuthenticationService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: authConfig
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

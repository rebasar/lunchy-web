import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatList,
  MatListItem,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatChipsModule,
  MatProgressSpinnerModule} from '@angular/material';

import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

import { AppComponent } from './app.component';
import { LunchyComponent } from './lunchy/lunchy.component';
import { LunchItemListComponent } from './lunch-item-list/lunch-item-list.component';
import { LunchItemComponent } from './lunch-item/lunch-item.component';
import { LunchPlacesComponent } from './lunch-places/lunch-places.component';
import { LunchyBackendService } from './lunchy-backend.service';
import { HttpClientModule } from '@angular/common/http';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('Not telling you :)')
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    LunchyComponent,
    LunchItemListComponent,
    LunchItemComponent,
    LunchPlacesComponent
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
    MatProgressSpinnerModule,
    HttpClientModule,
    SocialLoginModule.initialize(config)
  ],
  providers: [LunchyBackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }

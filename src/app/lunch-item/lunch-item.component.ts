import { Component, OnInit, Input } from '@angular/core';
import { LunchItem } from '../lunchy/lunch';
import { AuthenticationService, AuthenticationAction } from '../authentication.service';

enum Sentiment {
  GOOD,
  NEUTRAL,
  BAD
}

class SentimentState {
  sentiment?: Sentiment;

  like(): void {
    this.sentiment = Sentiment.GOOD;
  }

  neutral(): void {
    this.sentiment = Sentiment.NEUTRAL;
  }

  bad(): void {
    this.sentiment = Sentiment.BAD;
  }

  isGood(): boolean {
    return this.sentiment === Sentiment.GOOD;
  }

  isNeutral(): boolean {
    return this.sentiment === Sentiment.NEUTRAL;
  }

  isBad(): boolean {
    return this.sentiment === Sentiment.BAD;
  }

}

@Component({
  selector: 'app-lunch-item',
  templateUrl: './lunch-item.component.html',
  styleUrls: ['./lunch-item.component.css']
})
export class LunchItemComponent implements OnInit {

  @Input() item: LunchItem;
  sentiment: SentimentState = new SentimentState();
  loggedIn: boolean;

  constructor(private authenticationService: AuthenticationService) {
    this.loggedIn = authenticationService.isLoggedIn();
    authenticationService
      .userState
      .subscribe((authenticationAction: AuthenticationAction) => this.loggedIn = authenticationAction.isLogin());
  }

  ngOnInit() {
  }

  like(): void {
    this.sentiment.like();
  }

  neutral(): void {
    this.sentiment.neutral();
  }

  bad(): void {
    this.sentiment.bad();
  }

}

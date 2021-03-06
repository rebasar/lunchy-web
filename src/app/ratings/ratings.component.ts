import { Component, OnInit, Input } from '@angular/core';
import { LunchItem } from '../lunchy/lunch';

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
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {

  @Input() disabled: boolean;
  @Input() item: LunchItem;
  sentiment: SentimentState = new SentimentState();

  constructor() { }

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

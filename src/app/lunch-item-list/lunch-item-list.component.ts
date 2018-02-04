import { Component, OnInit, Input } from '@angular/core';
import { LunchItem } from '../lunchy/lunch';

@Component({
  selector: 'app-lunch-item-list',
  templateUrl: './lunch-item-list.component.html',
  styleUrls: ['./lunch-item-list.component.css']
})
export class LunchItemListComponent implements OnInit {


  @Input() lunchItems: LunchItem[] = [];

  constructor() { }

  ngOnInit() {
  }

}

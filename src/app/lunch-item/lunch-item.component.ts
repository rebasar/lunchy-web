import { Component, OnInit, Input } from '@angular/core';
import { LunchItem } from '../lunchy/lunch';

@Component({
  selector: 'app-lunch-item',
  templateUrl: './lunch-item.component.html',
  styleUrls: ['./lunch-item.component.css']
})
export class LunchItemComponent implements OnInit {

  @Input() item: LunchItem;

  constructor() { }

  ngOnInit() {
  }

}

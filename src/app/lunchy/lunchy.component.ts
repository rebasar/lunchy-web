import { Component, OnInit } from '@angular/core';

import { LunchPlace } from './lunch_place';
import { LunchItem } from './lunch';

@Component({
  selector: 'app-lunchy',
  templateUrl: './lunchy.component.html',
  styleUrls: ['./lunchy.component.css']
})
export class LunchyComponent implements OnInit {

  places: LunchPlace[] = [{name: 'Barabicu', uri: 'https://lunchy.nu/lunch/barabicu', website: 'http://barabicu.se'}];
  items: LunchItem[] = [{title: 'Wallenbergare', descsription: 'Yummy!', price: 115},
                        {title: 'Beef Chuck', descsription: 'Chuckity chuck chuck', price: 115}];

  constructor() { }

  ngOnInit() {
  }

}

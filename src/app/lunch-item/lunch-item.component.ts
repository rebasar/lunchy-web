import { Component, OnInit, Input } from '@angular/core';
import { LunchItem } from '../lunchy/lunch';
import { AuthenticationService, AuthenticationAction } from '../authentication.service';

@Component({
  selector: 'app-lunch-item',
  templateUrl: './lunch-item.component.html',
  styleUrls: ['./lunch-item.component.css']
})
export class LunchItemComponent implements OnInit {

  @Input() item: LunchItem;
  loggedIn: boolean;

  constructor(private authenticationService: AuthenticationService) {
    this.loggedIn = authenticationService.isLoggedIn();
    authenticationService
      .userState
      .subscribe((authenticationAction: AuthenticationAction) => this.loggedIn = authenticationAction.isLogin());
  }

  ngOnInit() {
  }

}

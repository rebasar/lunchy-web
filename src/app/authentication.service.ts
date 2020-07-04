import { Injectable } from '@angular/core';
import { SocialUser, SocialAuthService } from 'angularx-social-login';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

export class AuthenticationAction {

  user?: SocialUser;

  static logout(): AuthenticationAction {
    return new AuthenticationAction(null);
  }

  static login(user: SocialUser): AuthenticationAction {
    return new AuthenticationAction(user);
  }

  private constructor(user?: SocialUser) {
    this.user = user;
  }

  isLogin(): boolean {
    return this.user !== null;
  }

  isLogout(): boolean {
    return !this.isLogin();
  }
}

@Injectable()
export class AuthenticationService {

  currentAction: AuthenticationAction = AuthenticationAction.logout();
  userState: BehaviorSubject<AuthenticationAction> = new BehaviorSubject<AuthenticationAction>(this.currentAction);

  constructor(private authService: SocialAuthService) {
    authService.authState.subscribe((user: SocialUser) => {
      this.userState.next(user === null ? AuthenticationAction.logout() : AuthenticationAction.login(user));
    });
  }

  loggedIn(user: SocialUser): void {
    this.userState.next(AuthenticationAction.login(user));
  }

  loggedOut(): void {
    this.userState.next(AuthenticationAction.logout());
  }

  isLoggedIn(): boolean {
    return this.currentAction.isLogin();
  }

}

import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import * as firebase from 'firebase';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/auth/auth.service';
import { Client } from 'src/app/models/Client';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription;
  public currentUserInfo: Client[];


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
      if (this.isAuth == true) {
        this.currentUserInfo = [{
          userId: firebase.auth().currentUser.uid,
          email: firebase.auth().currentUser.email,
          userName: firebase.auth().currentUser.displayName
        }];
      };
    });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
      this.authSubscription.unsubscribe();
  }

}

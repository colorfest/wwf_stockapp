import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';

import { Client } from '../models/Client';
import { AuthData } from '../models/AuthData';

@Injectable()
export class AuthService {
    authChange = new Subject<boolean>();
    private isAuthenticated = false;
    public currentUserInfo: Client[];

    constructor(private router: Router, private afAuth: AngularFireAuth) {}

    initAuthListener() {
        console.log('AUTH USER LISTENER');
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.isAuthenticated = true;
                this.authChange.next(true);
                //this.router.navigate(['/homepage']);
                console.log(user);
            } else {
                this.authChange.next(false);
                this.router.navigate(['/login']);
                this.isAuthenticated = false;
                alert('not logged in');
            }
        });
    }

    /**
     * Register a user in Firebase
     * @param authData authorization data passed in
     */
    registerUser(authData: AuthData) {
        this.afAuth.auth
            .createUserWithEmailAndPassword(authData.email, authData.password)
            .then(result => {
                return result.user.updateProfile({
                    displayName: authData.username
                })
            })
            .catch(error => {
                console.log(`An error occurred in authorization ${error}.`);
            });
    }

    /**
     * Login user
     * @param authData authorization data from firebase
     */
    login(authData: AuthData) {
        this.afAuth.auth
            .signInWithEmailAndPassword(authData.email, authData.password)
            .then(result => {
                console.log(result);
                this.router.navigate(['/homepage']);
            })
            .catch(error => {
                console.log(`An error occurred when signing in ${error}.`);
            });
    }

    /**
     * Logout user
     */
    logout() {
        this.afAuth.auth.signOut();
        // TODO: unsubscribe from all subscriptions
    }


    /**
     * Check if user is authorized
     * @returns authorization status
     */
    isAuth() {
        return this.isAuthenticated;
    }
}
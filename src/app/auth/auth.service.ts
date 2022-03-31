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
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.isAuthenticated = true;
                this.authChange.next(true);
                this.router.navigate(['/homepage']);
            } else {
                this.authChange.next(false);
                this.router.navigate(['/login']);
                this.isAuthenticated = false;
            }
        });
    }

    /**
     * Get the information about the current logged in user
     * @returns Client object with logged in user's information
     */
    getUserInfo() {
        this.afAuth.authState.subscribe(user => {
            this.currentUserInfo = [{
                userId: user.displayName,
                email: user.email
            }];
            console.log('return user info');console.log(this.currentUserInfo);
            return this.currentUserInfo;
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
import { Component, OnInit } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";

@Component({
    template: `
        <h1 >API Security</h1>
        
        <div class="panel panel-default">
            <div class="panel-body">
                <p>OIDC Authentication</p>
                <button class="btn btn-default" (click)="login()">Login</button>
                <button class="btn btn-default" (click)="logout()">Logout</button>
            </div>
        </div>
       <div class="panel panel-default">
            <div class="panel-body">
                <b>OIDC User claims.nickname:</b> {{nickName}}
            </div>
        </div>

        <div class="panel panel-default">
            <div class="panel-body">
                <p>OAuth PasswordFlow grant</p>

                <p style="color:red; font-weight:bold" *ngIf="loginFailed">
                    Login wasn't successfull.
                </p>

                <div class="form-group">
                    <label>Username</label>
                    <input class="form-control" [(ngModel)]="userName">
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input class="form-control" type="password" [(ngModel)]="password">
                </div>
                <div class="form-group">
                    <button class="btn btn-default" (click)="loginWithPassword()">Login</button>
                    <button class="btn btn-default" (click)="logout()">Logout</button>
                </div>     
 
            </div>
        </div>


        <div class="panel panel-default">
            <div class="panel-body">
                <b>OAuth AccessToken:</b> {{accessToken}}
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-body">
                <b>Username/Password:</b> simon.c.eastwood@gmail.com / simon.c.eastwood@gmail.com
            </div>
        </div>

    `
})
export class HomeComponent implements OnInit {

    userName: string;
    password: string;
    loginFailed: boolean = false;

    constructor(private oauthService: OAuthService) {
               
    }

    login() {

console.log ('calling implicit flow');
        this.oauthService.initImplicitFlow();
    }

    logout() {
        console.error ('calling logout');
        this.oauthService.logOut();
    }

    get nickName() {

        var claims = this.oauthService.getIdentityClaims();

        if (!claims) return null;
        console.log (claims);
        return claims.nickname;
    }

     get accessToken() {

        var at = this.oauthService.getAccessToken();

        if (!at) return null;
     
        return at;
    }

    loginWithPassword() {

        //this.oauthService.clientId = "AmX1mGkr5X7uh8xtAsCwVF-x2A8T9BBT";

        // overrule token endpoint for 
        
        this
            .oauthService
            .fetchTokenUsingPasswordFlowAndLoadUserProfile(this.userName, this.password)
            .then(() => {
                console.debug('successfully logged in');
                this.loginFailed = false;
            })
            .catch((err) => {
                console.error('error logging in', err);
                this.loginFailed = true;
            })
            .then(() => {
              //  this.oauthService.clientId = "AmX1mGkr5X7uh8xtAsCwVF-x2A8T9BBT";
            })
    }



    ngOnInit() { }

}
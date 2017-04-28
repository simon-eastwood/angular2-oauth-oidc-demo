import { FlightHistoryComponent } from './flight-history/flight-history.component';
import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
    selector: 'flight-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    public info: string = "Welt";

    constructor(private oauthService: OAuthService) {

// URL of the SPA to redirect the user to after login
        this.oauthService.redirectUri = window.location.origin + "/index.html";
 
        // The SPA's id. The SPA is registerd with this id at the auth-server
        this.oauthService.clientId = "AmX1mGkr5X7uh8xtAsCwVF-x2A8T9BBT";
 
        // set the scope for the permissions the client should request
        // The first three are defined by OIDC. The 4th is a usecase-specific one
        this.oauthService.scope = "openid profile email";
 
        // set to true, to receive also an id_token via OpenId Connect (OIDC) in addition to the
        // OAuth2-based access_token
        this.oauthService.oidc = true;


 
        // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
        // instead of localStorage
        this.oauthService.setStorage(sessionStorage);

        this.oauthService.issuer = 'https://simon-eastwood.eu.auth0.com/authorize';

        // Set a dummy secret
        // Please note that the auth-server used here demand the client to transmit a client secret, although
        // the standard explicitly cites that the password flow can also be used without it. Using a client secret
        // does not make sense for a SPA that runs in the browser. That's why the property is called dummyClientSecret
        // Using such a dummy secreat is as safe as using no secret.
        this.oauthService.dummyClientSecret = "Uzhmbif6fMDboKS653IwLOZNBwxD8GGQ7YQcHfpMLtmPs8UDL7aWSQen1UThvdrh";

        // Load Discovery Document and then try to login the user
        this.oauthService.loadDiscoveryDocument('https://simon-eastwood.eu.auth0.com/.well-known/openid-configuration').then(() => {
 
            // set the logut URL becauae Auth0 doesnt provide that in the disvoery doc
            this.oauthService.logoutUrl = 'https://simon-eastwood.eu.auth0.com/v2/logout';

            // This method just tries to parse the token(s) within the url when
            // the auth-server redirects the user back to the web-app
            // It dosn't send the user the the login page
            this.oauthService.tryLogin({});    

 
 
        });

    }

}




import { Injectable, Inject} from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import {BASE_URL} from "../../app.tokens";
import {Observable} from "rxjs";
import {Flight} from "../../entities/flight";
import {OAuthService} from "angular-oauth2-oidc";

@Injectable()
export class FlightService {

     constructor(
         private oauthService: OAuthService,
         private http: Http,
         @Inject(BASE_URL) private baseUrl: string
     ) {
     }

     public flights: Array<Flight> = [];

     find(to: string): void {
         let url =  "http://ops.epo.org/3.1/rest-services/published-data/search";
         let headers = new Headers();
         headers.set('Accept', 'application/json');
         headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());

         let search = new URLSearchParams();
         search.set('q', to);

         this
             .http
             .get(url, {headers, search})
             .map(resp => resp.json())
             .subscribe(
                 (flights) => { 
                     this.flights = flights; 
                 },
                 (err) => { 
                     console.warn('status', err.status); 
                 }
             );
     }

}
import { Injectable, Inject} from '@angular/core';
import {Http, Headers, URLSearchParams, Response} from '@angular/http';
import {BASE_URL} from "../app.tokens";
import {Observable} from "rxjs";

import {OAuthService} from "angular-oauth2-oidc";

@Injectable()
export class CallApiService {
     

     constructor(
         private oauthService: OAuthService,
         private http: Http,
         @Inject(BASE_URL) private baseUrl: string
     ) {
     }

    

     find(to: string): Observable<String>  {
         let url =  "http://ops.epo.org/3.1/rest-services/published-data/search";
         let headers = new Headers();
         headers.set('Accept', 'application/json');
     //    headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());

         let search = new URLSearchParams();
         search.set('q', to);

        return  this
             .http
             .get(url, {headers, search})
             .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }

}
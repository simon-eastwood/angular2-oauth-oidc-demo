import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BASE_URL} from "./app.tokens";
import {SharedModule} from "./shared/shared.module";
import {AppRouterModule} from "./app.routes";
import {HomeComponent} from "./home/home.component";
import {CallApiComponent} from "./call-api/call-api.component";
import { OAuthModule } from 'angular-oauth2-oidc';
import { CallApiService } from './call-api/call-api.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule.forRoot(),
        AppRouterModule,
        OAuthModule.forRoot()
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        CallApiComponent
        
    ],
    providers: [
        CallApiService,
        { provide: BASE_URL, useValue: "https://hpg-keycloak.northeurope.cloudapp.azure.com:8443"}
    ],
    bootstrap: [
        AppComponent

    ]
})
export class AppModule {
}
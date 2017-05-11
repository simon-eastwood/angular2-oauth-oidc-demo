import {NgModule} from "@angular/core";
import {FlightSearchComponent} from "./flight-search/flight-search.component";






import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {FlightBookingRouterModule} from "./flight-booking.routes";
import {FlightBookingComponent} from "./flight-booking.component";
import {FlightService} from "./services/flight.service";

@NgModule({
    imports: [
        CommonModule, // ngFor
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        FlightBookingRouterModule
    ],
    declarations: [
        FlightSearchComponent,
        
        
        
        
        
        
        FlightBookingComponent
    ],
    providers: [
        FlightService
    ],
    exports: [
    ]
})
export class FlightBookingModule {

}
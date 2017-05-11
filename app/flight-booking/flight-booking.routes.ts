import {Routes, RouterModule} from "@angular/router";
import {FlightSearchComponent} from "./flight-search/flight-search.component";


import {FlightBookingComponent} from "./flight-booking.component";
import {AuthGuard} from "../shared/auth/auth.guard";
import {LeaveComponentGuard} from "../shared/deactivation/LeaveComponentGuard";

let FLIGHT_BOOKING_ROUTES: Routes = [
    {
        path: '',
        component: FlightBookingComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'flight-search',
                component: FlightSearchComponent
            }

        ]
    }
];

export let FlightBookingRouterModule = RouterModule.forChild(FLIGHT_BOOKING_ROUTES);
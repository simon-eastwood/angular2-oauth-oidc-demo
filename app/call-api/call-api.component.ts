import { Component, OnInit } from '@angular/core';
import { CallApiService } from './call-api.service';


@Component({
    selector: 'call-api',
    templateUrl: './call-api.component.html',
    styleUrls: ['./call-api.component.css']
})
export class CallApiComponent implements OnInit {

   public to: string = "";
   public response: string = "None yet";

    constructor(private callApiService: CallApiService) {
               
    }

    public invoke(): void {
console.log ('invoke called with ' + this.to);
        this.callApiService
            .find(this.to);

           //.map(function(resp) { return resp.json() });

    }

    ngOnInit() { }

}
import { Component } from '@angular/core';
import { FlightManagerService } from '../../service/flight-manager.service';
import { Flight } from '../../class/flight';
import {Router, NavigationExtras} from '@angular/router';
import { FlightFirebaseService } from 'src/service/flight-firebase.service';
import { Observable } from 'rxjs';
function sameday(d1: Date, d2: Date){
  return d1.getMonth() == d2.getMonth() &&
         d1.getDay() == d2.getDay() &&
         d1.getFullYear() == d2.getFullYear()
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public num_flights: number = 0
  constructor(private flightService: FlightManagerService,
              private router: Router){}

  public get_flights(): Array<Flight> {
    let flights = this.flightService.get_flights()
    this.num_flights = flights.length
    return flights
  }

  public visualize_or_checkin(flight: Flight){
    if(flight.checkin_done){
      this.router.navigateByUrl('/boardingpass', {state: {'flight': flight}})
    } else {
      this.router.navigateByUrl('/checkin', {state: {'flight': flight}})
    }
  }

  public multiplesamedate(date: Date){
    let flightdates = this.flightService.get_flights().map((f) => f.date)
    var num_samedate = flightdates.map<number>((d) => sameday(d, date)? 1:0).reduce((a,b) => a+b)
    console.log("num same date for " + date.toLocaleDateString() + " = " + num_samedate)
    return num_samedate > 1

  }

  ngOnInit(): void {
    this.num_flights = this.flightService.get_flights().length
  }
}

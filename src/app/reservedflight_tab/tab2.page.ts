import { Component } from '@angular/core';
import { FlightManagerService } from '../../service/flight-manager.service';
import { Flight } from '../../class/flight';
import {Router, NavigationExtras} from '@angular/router';
import { FlightFirebaseService } from 'src/service/flight-firebase.service';
import { Observable } from 'rxjs';

function sameday(f1: Flight, f2: Flight){
  return f1.date == f2.date && f1.key != f2.key
}


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public num_flights: number = 0
  public flights$: Observable<Flight[]>

  constructor(private flightService: FlightManagerService,
              private flight_firebase: FlightFirebaseService,
              private router: Router){}

  // public get_flights(): Observable<Flight[]> {
  //   let flights = this.flightService.get_flights()
  //   this.num_flights = flights.length
  //   return this.flight_firebase.pull_data()
  //   // return flights
  // }

  public visualize_or_checkin(flight: Flight){
    if(flight.checkin_done){
      this.router.navigateByUrl('/boardingpass', {state: {'flight': flight}})
    } else {
      this.router.navigateByUrl('/checkin', {state: {'flight': flight}})
    }
  }

  public multiplesamedate(flight: Flight){
    var num_samedate = this.flightService.get_flights().map<number>((f) => sameday(f, flight)? 1:0).reduce((a,b) => a+b)
    return num_samedate > 1

  }

  ngOnInit(): void {
    this.num_flights = this.flightService.get_flights().length
    this.flightService.clear_flights()
    this.num_flights = 0
    this.flights$ = this.flight_firebase.pull_data()
    this.flights$.forEach((flights) =>{
      for(let f of flights){
        this.flightService.add_flight(f)
        this.num_flights += 1
      }
    })

  }

}

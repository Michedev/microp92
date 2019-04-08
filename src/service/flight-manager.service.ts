import { Injectable } from '@angular/core';
import {Flight} from '../class/flight'
import { CheckInData } from '../class/check-in-data';

@Injectable({
  providedIn: 'root'
})
export class FlightManagerService {
  private flights: Array<Flight>;
  constructor() { 
    this.flights = []
  }

  public add_flight(f: Flight){
    this.flights[this.flights.length] = f
  }

  public remove_flight(flight: Flight){
    this.flights = this.flights.filter((f) => f != flight)
  }

  public get_flights(): Array<Flight>{
    return this.flights
  }

  public clear_flights() {
    this.flights = []
  }
}

import { Injectable } from '@angular/core';
import { Flight } from 'src/class/flight';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FlightFirebaseService {
  private flightDB = this.db.list<Flight>('Flights');

  constructor(private db: AngularFireDatabase) { }

  public add_flight(flight: Flight){
    return this.flightDB.push(flight)
  }

  public get_flights(){
    return this.flightDB
  }

  public update_flight(flight: Flight){
    this.flightDB.update(flight.key, flight)
  }

  public delete_flight(flight: Flight){
    this.flightDB.remove(flight.key)
  }

  public pull_data(){
    return this.flightDB
    .snapshotChanges()
    .map(
      (changes) => changes.map(
        (c) => {
          let values = c.payload.val()
          let flight = new Flight(values['from'], values['to'], values['date'], values['time'], values['price'])
          flight.checkin_done = values['checkin_done']
          flight.data = values['data']
          flight.key = c.payload.key
          return flight
        }
      )
    )
  }

}

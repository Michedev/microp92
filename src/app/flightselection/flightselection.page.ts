import { Component, OnInit } from '@angular/core';
import { Dayflight } from '../../class/dayflight';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Flight } from '../../class/flight';
import { FlightManagerService } from '../../service/flight-manager.service';
import { FlightFirebaseService } from 'src/service/flight-firebase.service';

@Component({
  selector: 'app-flightselection',
  templateUrl: './flightselection.page.html',
  styleUrls: ['./flightselection.page.scss'],
})

export class FlightselectionPage implements OnInit {
  public dayflights: Array<Dayflight> = [
    new Dayflight("07:00", 76),
    new Dayflight("10:25", 57),
    new Dayflight("15:50", 104),
    new Dayflight("19:30", 95)
  ]
  public flight: Flight

  constructor(private location: Location,
              private router: Router,
              private flight_manager: FlightManagerService,
              private flight_firebase: FlightFirebaseService) {
                this.flight = router.getCurrentNavigation().extras.state['flight']
               }

  ngOnInit() {}

  public islowerprice(price: number): boolean{
    return this.dayflights.map((df) => df.price >= price).reduce((a, b) => a && b)
  }

  public goback(){
    this.location.back()
  }

  public reserve_flight(dayflight: Dayflight){
    this.flight.time = dayflight.time
    this.flight.price = dayflight.price
    this.flight_manager.add_flight(this.flight)
    this.flight_firebase.add_flight(this.flight)
    this.router.navigateByUrl('/tabs/tab2')
  }
}

  
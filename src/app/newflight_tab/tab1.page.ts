import { Component } from '@angular/core';
import { CitiesService } from '../../service/cities.service';
import { FlightManagerService } from '../../service/flight-manager.service';
import { Flight } from '../../class/flight';
import { Router } from '@angular/router';

function cross(lst: Array<string>): Array<[string, string]>{
  var result: Array<[string, string]> = []
  for(var i = 0; i < lst.length; i+=1){
    for(var j = 0; j < lst.length; j+=1){
      if(i != j){
        result[result.length] = [lst[i], lst[j]]
      }
    }
  }
  console.log(result)
  return result
}


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public cities: Array<string>
  public start: string = ""
  public end: string = ""
  public dateflight: Date = undefined

  constructor(private citiesService: CitiesService, private flightService: FlightManagerService, private router: Router){
    this.cities = this.citiesService.get_cities()
    this.flightService = flightService
    this.router = router
  }

  public new_flight(){
    let newflight = new Flight(this.start, this.end, new Date(this.dateflight))
    this.start = ""
    this.end = ""
    this.dateflight = undefined
    this.router.navigateByUrl('/flightselection', {state: {'flight': newflight}})
  }
}

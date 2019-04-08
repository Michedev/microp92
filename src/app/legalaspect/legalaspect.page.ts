import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FlightManagerService } from '../../service/flight-manager.service';

@Component({
  selector: 'app-legalaspect',
  templateUrl: './legalaspect.page.html',
  styleUrls: ['./legalaspect.page.scss'],
})
export class LegalaspectPage implements OnInit {

  constructor(private location: Location, private fm: FlightManagerService) { }

  ngOnInit() {
  }

  public goback(){
    console.log(this.fm.get_flights())
    this.location.back()
  }

}

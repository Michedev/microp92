import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../../class/flight';
import { Location } from '@angular/common';

class Item {
  constructor(
    public key: string,
    public value: string
  ) { }
}

function to_items(f: Flight): Array<Item> {
  return [
    new Item("Name and surname", f.data.name_surname),
    new Item("Pasaporte", f.data.passaport),
    new Item("Desde", f.from),
    new Item("Hacia", f.to),
    new Item("Asiento asignado", "I47"),
    new Item("Hora de embarque", "14:00"),
    new Item("Puerta de embarque", "B")
  ]
}

@Component({
  selector: 'app-boardingpass',
  templateUrl: './boardingpass.page.html',
  styleUrls: ['./boardingpass.page.scss'],
})
export class BoardingpassPage implements OnInit {
  public items: Array<Item>
  constructor(private router: Router,
              private location: Location) {
    this.location = location
    let flight: Flight = this.router.getCurrentNavigation().extras.state['flight']
    this.items = to_items(flight)
  }

  public goback(){
    this.location.back()
  }

  ngOnInit() {
  }

}

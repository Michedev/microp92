import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor() { }

  public get_cities(): Array<string>{
    return ["Dublin", "Madrid", "Rome", "Paris"]

  }
}

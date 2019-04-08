import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClickTrackerService {

  private clickDB = this.db.list('ClickData');

  constructor(private db: AngularFireDatabase) {
   }

  public record_goback(pagename: string){
    let now = new Date().toLocaleString('en-GB')
    let data = {type: 'goback', datetime: now, pagename: pagename}
    this.clickDB.push(data)
  }

  public record_transition(router: Router){
    let now = new Date().toLocaleString('en-GB')
    let actual = router.getCurrentNavigation()
    let actual_page = actual.finalUrl.toString()
    let prev_page = actual.previousNavigation.finalUrl.toString()
    let data = {type: 'page_transition', from: prev_page, to: actual_page, datetime: now}
    this.clickDB.push(data)
  }
}

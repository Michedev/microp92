import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TimeTrackerService {
  private timeDB = this.db.list('TimeData');

  private starting: Array<number>
  private page_infos: Array<string>
  constructor(private db: AngularFireDatabase) {
    this.starting = []
   }

  public start_tracking(pagename: string){
    let start = Date.now()
    this.starting.push(start)
    this.page_infos.push(pagename)
  }

  public stop_tracking(succesful: boolean){
    let stop = Date.now()
    let start = this.starting.shift()
    let name = this.page_infos.shift()
    let data = {succesful: succesful, start_time: start, stop_time: stop, pagename: name}
    this.timeDB.push(data)
  }
}
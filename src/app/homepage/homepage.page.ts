import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public gotoreserve(){
    this.router.navigateByUrl('/tabs/tab1')
  }

  public gotoflights() {
    this.router.navigateByUrl('/tabs/tab2')
  }

}

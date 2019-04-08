import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewController } from '@ionic/core';

@Component({
  selector: 'app-popover-menu',
  templateUrl: './popover-menu.component.html',
  styleUrls: ['./popover-menu.component.scss'],
})
export class PopoverMenuComponent implements OnInit {
  public popover: any
  constructor(private router: Router) { }

  ngOnInit() {}

  public gotolegalaspect() {
    this.router.navigateByUrl('/legalaspect')
    this.popover.dismiss()
  }

}

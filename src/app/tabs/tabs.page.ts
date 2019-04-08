import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverMenuComponent } from '../popover-menu/popover-menu.component';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private popoverCtrl: PopoverController){}

  public async present_popover(event){
    let popover = await this.popoverCtrl.create({
      component: PopoverMenuComponent,
      event: event
    })
    return await popover.present()
  }
}

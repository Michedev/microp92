import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { PopoverMenuComponent } from '../popover-menu/popover-menu.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  entryComponents: [PopoverMenuComponent],
  declarations: [TabsPage, PopoverMenuComponent]
})
export class TabsPageModule {}

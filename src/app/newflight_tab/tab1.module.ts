import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, enableProdMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { DatePickerModule } from 'ionic4-date-picker';
import { Capabilities } from 'protractor';
import { createHostListener } from '@angular/compiler/src/core';

@NgModule({
  imports: [
    IonicModule,
    DatePickerModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}

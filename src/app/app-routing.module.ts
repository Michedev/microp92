import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'checkin', loadChildren: './checkin/checkin.module#CheckinPageModule' },
  { path: 'boardingpass', loadChildren: './boardingpass/boardingpass.module#BoardingpassPageModule' },
  { path: 'legalaspect', loadChildren: './legalaspect/legalaspect.module#LegalaspectPageModule' },
  { path: 'flightselection', loadChildren: './flightselection/flightselection.module#FlightselectionPageModule' },
  { path: 'homepage', loadChildren: './homepage/homepage.module#HomepagePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

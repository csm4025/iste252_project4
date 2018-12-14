import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'establishments/:cityId', loadChildren: './establishments/establishments.module#EstablishmentsPageModule' },
  { path: 'restaurants/:estId', loadChildren: './restaurants/restaurants.module#RestaurantsPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

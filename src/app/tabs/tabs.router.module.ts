import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { LocationPage } from '../location/location.page';
import { EstablishmentsPage } from '../establishments/establishments.page';
import { RestaurantsPage } from '../restaurants/restaurants.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(location:location)',
        pathMatch: 'full',
      },
      {
        path: 'location',
        outlet: 'location',
        component: LocationPage
      },
      {
        path: 'establishments',
        outlet: 'establishments',
        component: EstablishmentsPage
      },
      {
        path: 'restaurants',
        outlet: 'restaurants',
        component: RestaurantsPage
      }

    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(location:location)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

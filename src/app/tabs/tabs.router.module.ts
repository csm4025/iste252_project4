import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { LocationPage } from '../location/location.page';

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

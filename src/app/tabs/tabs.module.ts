import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { LocationPageModule } from '../location/location.module';
import { EstablishmentsPageModule } from '../establishments/establishments.module';
import { RestaurantsPageModule } from '../restaurants/restaurants.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    LocationPageModule,
    EstablishmentsPageModule,
    RestaurantsPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}

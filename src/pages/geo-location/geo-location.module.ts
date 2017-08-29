import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeoLocationPage } from './geo-location';

@NgModule({
  declarations: [
    GeoLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(GeoLocationPage),
  ],
})
export class GeoLocationPageModule {}

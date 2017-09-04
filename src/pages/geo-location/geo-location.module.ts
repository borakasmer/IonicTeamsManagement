import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeoLocationPage } from './geo-location';
import { Geolocation } from '@ionic-native/geolocation';
import { AgmCoreModule } from "@agm/core";

@NgModule({
  declarations: [
    GeoLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(GeoLocationPage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBJRR34KTxiwTUQB9KIr2f_-oCFFri2Xfw'
    })
  ],
  providers: [
    Geolocation
  ]
})
export class GeoLocationPageModule { }

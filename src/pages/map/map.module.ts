import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapPage } from './map';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    MapPage,
  ],
  imports: [
    IonicPageModule.forChild(MapPage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBJRR34KTxiwTUQB9KIr2f_-oCFFri2Xfw'
    })
  ],
})
export class MapPageModule { }

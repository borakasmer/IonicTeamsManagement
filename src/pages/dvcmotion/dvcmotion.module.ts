import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DvcmotionPage } from './dvcmotion';
import { DeviceMotion } from '@ionic-native/device-motion';

@NgModule({
  declarations: [
    DvcmotionPage,
  ],
  imports: [
    IonicPageModule.forChild(DvcmotionPage),
  ],
  providers: [
    DeviceMotion
  ]
})
export class DvcmotionPageModule { }

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VibrationPage } from './vibration';
import { Vibration } from "@ionic-native/vibration";
@NgModule({
  declarations: [
    VibrationPage,
  ],
  imports: [
    IonicPageModule.forChild(VibrationPage),
  ],
  providers :[
    Vibration
  ]
})
export class VibrationPageModule {}

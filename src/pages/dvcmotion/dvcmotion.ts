import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from "@ionic-native/device-motion";

@IonicPage()
@Component({
  selector: 'page-dvcmotion',
  templateUrl: 'dvcmotion.html',
})
export class DvcmotionPage {
  data: any;
  subscription: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private deviceMotion: DeviceMotion) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DvcmotionPage');
  }

  public startMonitor() {
    var option: DeviceMotionAccelerometerOptions = {
      frequency: 200
    };

    this.subscription = this.deviceMotion.watchAcceleration(option).subscribe((acceleration: DeviceMotionAccelerationData) => {
      this.data = acceleration;
    });
  }

  public stopMonitor() {
    this.subscription.unsubscribe();
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-geo-location',
  templateUrl: 'geo-location.html',
})
export class GeoLocationPage {

  location: { lat: number, lng: number };
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeoLocationPage');
  }

  getGeoLocation() {
    this.geolocation.getCurrentPosition().then((res) => {
      this.location = {
        lat: res.coords.latitude,
        lng: res.coords.longitude
      };
    });
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AgmCoreModule } from '@agm/core';

@IonicPage()
@Component({
  selector: 'page-geo-location',
  templateUrl: 'geo-location.html',
})
export class GeoLocationPage {
  map: any;
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
      this.map = {
        lat: this.location.lat,
        lng: this.location.lng,
        zoom: 12,
        markerLabel: "Now You Are There!"
      }
    });
  }
}

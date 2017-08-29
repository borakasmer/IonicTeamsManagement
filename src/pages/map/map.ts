import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgmCoreModule } from '@agm/core';
import { EliteApi } from "../../shared/elite-api.services";

declare var window: any;
/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  map: any
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private eliteApi: EliteApi,
  ) {
  }

  ionViewDidLoad() {
    let games = this.navParams.data;
    console.log("locationId:" + games.locationId);
    let tourneyData = this.eliteApi.getCurrentTourney();
    console.log("location:" + tourneyData.locations[games.locationId]);
    let location = tourneyData.locations[games.locationId];

    this.map = {
      lat: location.latitude,
      lng: location.longitude,
      zoom: 12,
      markerLabel: games.location
    }
    console.log('ionViewDidLoad MapPage');
  }

  goToDirections() {
    window.location = `geo:${this.map.lat},${this.map.lng};u=35;`;
  }

}

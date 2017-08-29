import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EliteApi } from "../../shared/elite-api.services";
import { TeamHomePage } from "../pages";
import { MapPage } from "../map/map";

declare var window: any;
/**
 * Generated class for the GamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  game: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private eliteApi: EliteApi
  ) {
  }

  ionViewDidLoad() {
    this.game = this.navParams.data;
    console.log('ionViewDidLoad GamePage');
    this.game.gameTime = Date.parse(this.game.time);

  }
  public teamTapped(teamId) {
    let tourneyData = this.eliteApi.getCurrentTourney();
    let team = tourneyData.teams.find(t => t.id === teamId);
    this.navCtrl.push(TeamHomePage, team);
  }

  public goToDirections() {
    let tourneyData = this.eliteApi.getCurrentTourney();
    let location = tourneyData.locations[this.game.locationId];
    window.location = `geo:${location.latitude},${location.longitude};u=35;`;
  }
  public goToMap() {
    this.navCtrl.push(MapPage, this.game);
  }
  isWinner(score1, score2) {
    return Number(score1) > Number(score2);
  }

}

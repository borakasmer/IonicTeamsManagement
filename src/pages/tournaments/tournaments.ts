import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TeamsPage } from "../teams/teams";
import { EliteApi } from "../../shared/elite-api.services";

/**
 * Generated class for the TournamentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  tournaments: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private eliteApi: EliteApi,
    private loadingController: LoadingController) {

  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Getting tournaments...',
      spinner:'circles'
    });
    loader.present().then(() => {
      this.eliteApi.getTournaments().subscribe(result => this.tournaments = result,
        err => console.log(err),
        () => {
          console.log("ok");
          loader.dismiss();
        });
    });
    console.log('ionViewDidLoad TournamentsPage');
  }
  public goBack() {
    //this.navCtrl.push(TeamsPage);
    this.navCtrl.pop();
  }
  itemTapped($event, tourney) {
    this.navCtrl.push(TeamsPage, tourney);
  }
}

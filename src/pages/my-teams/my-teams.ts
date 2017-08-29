import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TournamentsPage } from "../tournaments/tournaments";
import { EliteApi } from "../../shared/elite-api.services";
import { TeamHomePage } from "../pages";
import { UserSettings } from "../../shared/user-settings.service";

/**
 * Generated class for the MyTeamsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html'
})
export class MyTeamsPage {

  favorites:any;
  /*  {
     team: { id: 6182, name: 'HC Elite 7th', coach: 'Michelotti' },
     tournamentId: '89e13aa2-ba6d-4f55-9cc2-61eba6172c63',
     tournamentName: 'March Madness Tournament'
   },
   {
     team: { id: 805, name: 'HC Elite', coach: 'Michelotti' },
     tournamentId: '98c6857e-b0d1-4295-b89e-2d95a45437f2',
     tournamentName: 'Holiday Hoops Challenge'
   }
 ]; */
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private loadingController: LoadingController,
    private eliteApi: EliteApi,
    private userSettings: UserSettings
  ) {
  }
  goToTournament() {
    this.navCtrl.push(TournamentsPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTeamsPage');
  }
  ionViewDidEnter() {
    console.log('ionViewDidEnter MyTeamsPage');
    this.favorites = this.userSettings.getAllFavorites();
    //console.log(this.favorites);
  }
  favoriteTapped($event, favorite) {
    let loader = this.loadingController.create({
      content: 'Patlama Bekle :)...',
      dismissOnPageChange: true
    });
    loader.present();
    this.eliteApi.getTournamentData(favorite.tournamentId)
      .subscribe(t => this.navCtrl.push(TeamHomePage, favorite.team));
  }
}

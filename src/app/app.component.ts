import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyTeamsPage } from "../pages/my-teams/my-teams";
import { TournamentsPage } from "../pages/tournaments/tournaments";
import { UserSettings } from "../shared/user-settings.service";
import { EliteApi } from "../shared/elite-api.services";
import { TeamHomePage } from "../pages/pages";
import { VibrationPage } from "../pages/vibration/vibration";



@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  favoriteTeams: any;
  rootPage: any = MyTeamsPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private userSettings: UserSettings,
    private loadingController: LoadingController,
    private eliteApi: EliteApi,
    private events:Events
  ) {
    this.initializeApp();
    // used for an example of ngFor and navigation
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //this.statusBar.hide();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.refreshFavorites();

      this.events.subscribe("favorites:changed",()=>this.refreshFavorites());
    });
  }

  refreshFavorites() {
    this.favoriteTeams = this.userSettings.getAllFavorites();
  }

  goToTeam(favorite) {
    let loader = this.loadingController.create({
      content: 'Şimdi Geliyor...',
      dismissOnPageChange: true
    });
    loader.present();
    this.eliteApi.getTournamentData(favorite.tournamentId).subscribe(res => this.nav.push(TeamHomePage, favorite.team))
  }
  goHome() {
    this.nav.push(MyTeamsPage);
  }
  goVibration(){
    this.nav.push(VibrationPage);
  }
  goTournaments() {
    this.nav.push(TournamentsPage);
  }
}

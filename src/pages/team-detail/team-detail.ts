import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

import * as _ from 'lodash';
import * as moment from 'moment';

import { GamePage } from "../pages";
import { EliteApi, UserSettings } from "../../shared/shared";

/**
 * Generated class for the TeamDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html',
})
export class TeamDetailPage {
  allGames: any[];
  dateFilter: string;
  games: any[];
  isFollowing = false;
  team: any;
  teamStanding: any;
  private tourneyData: any;
  useDateFilter = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private eliteApi: EliteApi,
    private alertController: AlertController,
    private toastController: ToastController,
    private userSettings: UserSettings
  ) {
    //this.team=this.navParams.data;
    console.log("data:", this.navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamDetailPage');
    this.team = this.navParams.data;
    this.tourneyData = this.eliteApi.getCurrentTourney();
    this.games = _.chain(this.tourneyData.games)
      .filter(g => g.team1Id === this.team.id || g.team2Id === this.team.id)
      .map(
      g => {
        let isTeam1 = (g.team1Id === this.team.id);
        /* console.log(g.team1Id)
        console.log(this.team.id)
        console.log(isTeam1);        
        console.log(g.team1Score);
        console.log(g.team2Score); */
        let opponentName = isTeam1 ? g.team2 : g.team1;
        let scoreDisplay = this.getScoreDisplay(isTeam1, g.team1Score, g.team2Score);
        return {
          gameId: g.id,
          opponent: opponentName,
          time: Date.parse(g.time),
          location: g.location,
          locationUrl: g.locationUrl,
          scoreDisplay: scoreDisplay,
          homeAway: (isTeam1 ? "vs." : "at")
        };
      })
      .value();
    this.allGames = this.games;
    this.teamStanding = _.find(this.tourneyData.standings, { 'teamId': this.team.id });

    this.userSettings.isFavoriteTeam(this.team.id).then(value => this.isFollowing = value);
  }

  getScoreDisplay(isTeam1, team1Score, team2Score) {
    if (team1Score && team2Score) {
      var teamScore = (isTeam1 ? team1Score : team2Score);
      //console.log("teamScore:"+teamScore);
      var opponentScore = (isTeam1 ? team2Score : team1Score);
      //console.log("opponentScore:"+opponentScore);
      //console.log("IsWin:"+(Number(teamScore) > Number(opponentScore)));
      var winIndicator = Number(teamScore) > Number(opponentScore) ? "W: " : "L: ";
      winIndicator = Number(teamScore) === Number(opponentScore) ? "-: " : winIndicator;
      //console.log(winIndicator);
      //console.log(winIndicator + teamScore + "_" + opponentScore);
      return winIndicator + teamScore + "_" + opponentScore;
    }
    else {
      return "";
    }
  }
  public goHome() {
    this.navCtrl.parent.parent.popToRoot();
  }

  public gameClicked($event, game) {
    /*  console.log(JSON.stringify(game)); */
    let sourceGame = this.tourneyData.games.find(g => g.id == game.gameId);
    /* console.log("Source:" + JSON.stringify(sourceGame)); */
    this.navCtrl.parent.parent.push(GamePage, sourceGame);
    //this.navCtrl.push(GamePage, sourceGame);
  }
  dateChanged() {
    if (this.useDateFilter) {
      this.games = _.filter(this.allGames, g => moment(g.time).isSame(this.dateFilter, 'day'));
    }
    else {
      this.games = this.allGames;
    }
  }
  getScoreWorL(game) {
    return game.scoreDisplay ? game.scoreDisplay[0] : '';
  }

  getScoreDisplayBadgeClass(game) {
    let css: string;
    css = game.scoreDisplay.indexOf('W:') === 0 ? 'primary' : (game.scoreDisplay.indexOf('L:')!=-1 ? 'danger' : 'light');
    return css;
  }

  refreshAll(refresher) {
    this.eliteApi.refreshCurrentTourney().subscribe(() => {
      refresher.complete();
      this.ionViewDidLoad();
    })
  }
  public toggleFollow() {
    if (this.isFollowing) {
      let confirm = this.alertController.create({
        title: 'Unfollow?',
        message: 'Are you sure you want to unfollow?',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              this.isFollowing = false;
              this.userSettings.unforiteTeam(this.team);
              let toast = this.toastController.create({
                message: 'You have unfollowed ' + this.team.name,
                duration: 2000,
                position: 'bottom'
              });
              toast.present();
            }
          },
          {
            text: 'No'
          }
        ]
      });
      confirm.present();
    }
    else {
      this.isFollowing = true;
      this.userSettings.favoriteTeam(this.team,
        this.tourneyData.tournament.id,
        this.tourneyData.tournament.name);
    }

  }
}

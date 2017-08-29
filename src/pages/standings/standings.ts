import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EliteApi } from "../../shared/elite-api.services";
import * as _ from 'Lodash';
/**
 * Generated class for the StandingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-standings',
  templateUrl: 'standings.html',
})
export class StandingsPage {
  allStandings: any[];
  divisionFilter = 'divison'
  standings: any[];
  team: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi: EliteApi) {

  }

  ionViewDidLoad() {
    this.team = this.navParams.data;
    let tourneyData = this.eliteApi.getCurrentTourney();
    this.standings = tourneyData.standings;

    /* this.allStandings =
      _.chain(this.standings)
        .groupBy('division')
        .toPairs()
        .map(item => _.zipObject(['divisionName', 'divisionStandings'], item))
        .value(); */

    console.log(this.allStandings);
    this.allStandings = tourneyData.standings;
    this.filterDivision();
  }

  filterDivision() {
    if (this.divisionFilter === "all") {
      this.standings = this.allStandings;
    } else {
      this.standings = _.filter(this.allStandings, s => s.division === this.team.division);
    }
  }

  public getHeader(record, recordIndex, records) {
    if (recordIndex === 0 || record.division != records[recordIndex - 1].division) {
      return record.division;
    }
    return null;
  }
}

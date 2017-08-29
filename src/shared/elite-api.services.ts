import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class EliteApi {
    private baseUrl = "https://elite-schedule-app-1bbf9.firebaseio.com";
    currentTournament: any = {};
    private tourneyData = {};
    constructor(private http: Http) { }

    getTournaments() {
        return this.http.get(`${this.baseUrl}/tournaments.json`)
            .map(result => result.json());
    }

    getTournamentData(ID, forceRefresh: boolean = false): Observable<any> {
        if (!forceRefresh && this.tourneyData[ID]) {
            this.currentTournament = this.tourneyData[ID];
            console.log("no need to make HTTP call");
            return Observable.of(this.currentTournament);
        }

        console.log("about to to make HTTP call");
        return this.http.get(`${this.baseUrl}/tournaments-data/${ID}.json`)
            .map(result => {
                this.tourneyData[ID] = result.json();
                this.currentTournament = this.tourneyData[ID];
                return this.currentTournament;
            });
    }
    refreshCurrentTourney() {        
        return this.getTournamentData(this.currentTournament.tournament.id, true);
    }
    getCurrentTourney() {
        return this.currentTournament;
    }
}
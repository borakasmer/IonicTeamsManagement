import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as _ from 'lodash';
import 'rxjs/add/operator/toPromise';
import { Events } from "ionic-angular";
@Injectable()
export class UserSettings {

    constructor(private storage: Storage,private events:Events) {

    }
    favoriteTeam(team, tournamentId, tournamentName) {
        let item = { team: team, tournamentId: tournamentId, tournamentName: tournamentName };
        this.storage.set(String(team.id), JSON.stringify(item));
        this.events.publish('favorites:changed');
    }

    unforiteTeam(team) {
        this.storage.remove(String(team.id));
        this.events.publish('favorites:changed');
    }

    isFavoriteTeam(teamId) {
        return this.storage.get(String(teamId)).then(value => value ? true : false);
    }

    getAllFavorites() {
        let items = [];
        this.storage.forEach((value, key, index) => {
            items.push(JSON.parse(value));
        }).then(() => { return items });
        return items;
    }
}

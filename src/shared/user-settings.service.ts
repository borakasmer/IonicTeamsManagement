import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as _ from 'lodash';
import 'rxjs/add/operator/toPromise';
import { Events } from "ionic-angular";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class UserSettings {

    private db: SQLiteObject;
    constructor(private storage: Storage, private events: Events, private sqlite: SQLite) {
    }
    favoriteTeam(team, tournamentId, tournamentName) {
        let item = { team: team, tournamentId: tournamentId, tournamentName: tournamentName };
        this.storage.set(String(team.id), JSON.stringify(item));
        this.saveTeams(team.id, JSON.stringify(item));

        this.events.publish('favorites:changed');
    }

    private saveTeams(id: number, data: string) {
        this.sqlite.create({
            name: 'data.db',
            location: 'default'
        })
            .then((db: SQLiteObject) => {
                console.log("Create DB");
                this.db = db;

                console.log('Create Table');
                this.db.executeSql("INSERT INTO `FavoriteTeams` (id,data) VALUES(" + id + ",'" + data + "')", {})
                    .then(() => {
                        console.log("Data Created");
                    })
                    .catch(e => alert("Insert Error: " + JSON.stringify(e)));
            })
            .catch(e => { alert(JSON.stringify(e)); return false; });
    }

    private deleteTeams(id: number) {
        this.sqlite.create({
            name: 'data.db',
            location: 'default'
        })
            .then((db: SQLiteObject) => {
                console.log("Create DB");
                this.db = db;
                //alert("Delete Data :" + id);
                this.db.executeSql("DELETE FROM `FavoriteTeams` WHERE id = " + id , {})
                    .then(() => {
                        console.log("Data Deleted");
                    })
                    .catch(e => alert("Delete Error: " + JSON.stringify(e)));
            })
            .catch(e => { alert(JSON.stringify(e)); return false; });
    }

    public getTeams() {
        return new Promise((resolve, reject) => {
            this.sqlite.create({
                name: 'data.db',
                location: 'default'
            })
                .then((db: SQLiteObject) => {
                    console.log("Create DB");
                    this.db = db;
                    this.db.executeSql('CREATE TABLE IF NOT EXISTS `FavoriteTeams` (`id` INTEGER NOT NULL, `data` TEXT NOT NULL)', {})
                        .then(() => {
                            console.log('Create Table');
                            //alert('Create Table');
                            this.db.executeSql('SELECT * FROM FavoriteTeams', {})
                                .then((data) => {
                                    //alert(JSON.stringify(data));
                                    if (data == null) {
                                        alert("null");
                                        return;
                                    }
                                    if (data.rows) {
                                        if (data.rows.length > 0) {
                                            let items = [];
                                            for (var i = 0; i < data.rows.length; i++) {
                                                //alert(data.rows.item(i).data);
                                                items.push(JSON.parse(data.rows.item(i).data));
                                            }
                                            //alert(items[1].team.name);
                                            return resolve(items);
                                            //return items;
                                        }
                                        else{
                                            return resolve(null);
                                        }
                                    }
                                    else{
                                        return resolve(null);
                                    }
                                })
                            /*  .then((result) => {  
                                 alert(result[0].tournamentName);                           
                                 return result;
                             }) */
                        })
                        .catch(e => alert("Get Team: " + JSON.stringify(e)));
                })
                .catch(e => { alert("Create Table: " + JSON.stringify(e)); return false; });
        });
    }

    unforiteTeam(team) {
        this.deleteTeams(team.id);
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

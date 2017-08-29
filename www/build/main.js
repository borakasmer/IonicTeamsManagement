webpackJsonp([0],{

/***/ 127:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/camera/camera.module": [
		318
	],
	"../pages/game/game.module": [
		182
	],
	"../pages/geo-location/geo-location.module": [
		315
	],
	"../pages/map/map.module": [
		170
	],
	"../pages/my-teams/my-teams.module": [
		310
	],
	"../pages/standings/standings.module": [
		306
	],
	"../pages/team-detail/team-detail.module": [
		305
	],
	"../pages/team-home/team-home.module": [
		307
	],
	"../pages/teams/teams.module": [
		308
	],
	"../pages/tournaments/tournaments.module": [
		309
	],
	"../pages/vibration/vibration.module": [
		311
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 169;

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MapPageModule = (function () {
    function MapPageModule() {
    }
    return MapPageModule;
}());
MapPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */]),
            __WEBPACK_IMPORTED_MODULE_3__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBJRR34KTxiwTUQB9KIr2f_-oCFFri2Xfw'
            })
        ],
    })
], MapPageModule);

//# sourceMappingURL=map.module.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_elite_api_services__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MapPage = (function () {
    function MapPage(navCtrl, navParams, eliteApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eliteApi = eliteApi;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        var games = this.navParams.data;
        console.log("locationId:" + games.locationId);
        var tourneyData = this.eliteApi.getCurrentTourney();
        console.log("location:" + tourneyData.locations[games.locationId]);
        var location = tourneyData.locations[games.locationId];
        this.map = {
            lat: location.latitude,
            lng: location.longitude,
            zoom: 12,
            markerLabel: games.location
        };
        console.log('ionViewDidLoad MapPage');
    };
    MapPage.prototype.goToDirections = function () {
        window.location = "geo:" + this.map.lat + "," + this.map.lng + ";u=35;";
    };
    return MapPage;
}());
MapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-map',template:/*ion-inline-start:"/Users/borakasmer/NavigateIonic/src/pages/map/map.html"*/'<!--\n  Generated template for the MapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Map</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding *ngIf="map!=null">\n  <button fab fab-left fab-bottom class="fab-map" (click)="goToDirections()">\n<ion-icon name="navigate"></ion-icon>\n  </button>\n  <agm-map [latitude]="map.lat" [longitude]="map.lng">\n    <agm-marker [latitude]="map.lat" [longitude]="map.lng"></agm-marker>\n  </agm-map>\n</ion-content>'/*ion-inline-end:"/Users/borakasmer/NavigateIonic/src/pages/map/map.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__shared_elite_api_services__["a" /* EliteApi */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePageModule", function() { return GamePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game__ = __webpack_require__(183);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GamePageModule = (function () {
    function GamePageModule() {
    }
    return GamePageModule;
}());
GamePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__game__["a" /* GamePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__game__["a" /* GamePage */]),
        ],
    })
], GamePageModule);

//# sourceMappingURL=game.module.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_elite_api_services__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_map__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the GamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var GamePage = (function () {
    function GamePage(navCtrl, navParams, eliteApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eliteApi = eliteApi;
    }
    GamePage.prototype.ionViewDidLoad = function () {
        this.game = this.navParams.data;
        console.log('ionViewDidLoad GamePage');
        this.game.gameTime = Date.parse(this.game.time);
    };
    GamePage.prototype.teamTapped = function (teamId) {
        var tourneyData = this.eliteApi.getCurrentTourney();
        var team = tourneyData.teams.find(function (t) { return t.id === teamId; });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages__["d" /* TeamHomePage */], team);
    };
    GamePage.prototype.goToDirections = function () {
        var tourneyData = this.eliteApi.getCurrentTourney();
        var location = tourneyData.locations[this.game.locationId];
        window.location = "geo:" + location.latitude + "," + location.longitude + ";u=35;";
    };
    GamePage.prototype.goToMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__map_map__["a" /* MapPage */], this.game);
    };
    GamePage.prototype.isWinner = function (score1, score2) {
        return Number(score1) > Number(score2);
    };
    return GamePage;
}());
GamePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-game',template:/*ion-inline-start:"/Users/borakasmer/NavigateIonic/src/pages/game/game.html"*/'<!--\n  Generated template for the GamePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Game</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding *ngIf="game!=null">\n  <!-- <h3>Home Team</h3>\n  <button (click)="teamTapped(game.team1Id)">{{game.team1}}</button>\n  <h3>Away Team</h3>\n  <button (click)="teamTapped(game.team2Id)">{{game.team2}}</button> -->\n  <ion-row>\n    <ion-col width-50 text-center class="divider-col">\n      <button clear full (click)="teamTapped(game.team1Id)">Home</button>\n    </ion-col>\n    <ion-col width-50 text-center>\n      <button clear full (click)="teamTapped(game.team2Id)">Away</button>\n    </ion-col>\n  </ion-row>\n  <ion-row center>\n    <ion-col width-50 text-center class="divider-col" (click)="teamTapped(game.team1Id)">\n      <h4>{{game.team1}}</h4>\n    </ion-col>\n    <ion-col width-50 text-center (click)="teamTapped(game.team2Id)">\n      <h4>{{game.team2}}</h4>\n    </ion-col>\n  </ion-row>\n  <ion-row baseline class="top-bottom-border">\n    <ion-col text-center (click)="teamTapped(game.team1Id)">\n      <h1 [class.primary-color]="isWinner(game.team1Score,game.team2Score)">{{game.team1Score}}</h1>\n    </ion-col>\n    <ion-col text-center>Score</ion-col>\n    <ion-col text-center (click)="teamTapped(game.team2Id)">\n      <h1 [class.primary-color]="isWinner(game.team2Score,game.team1Score)">{{game.team2Score}}</h1>\n    </ion-col>\n  </ion-row>\n  <ion-card>\n    <ion-item>\n      <ion-icon name="calendar" item-left></ion-icon>\n      {{game.gameTime | date:\'M/d/yy\'}} {{game.gameTime | date:\'shortTime\'}}\n    </ion-item>\n    <ion-row>\n      <ion-col width-60>\n        <ion-label>{{game.location}}</ion-label>\n      </ion-col>\n      <ion-col width-40 text-right>\n        <button outline (click)="goToMap()">\n          <ion-icon name="map"></ion-icon>\n        </button>\n        <button outline (click)="goToDirections()">\n            <ion-icon name="navigate"></ion-icon>\n          </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/borakasmer/NavigateIonic/src/pages/game/game.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__shared_elite_api_services__["a" /* EliteApi */]])
], GamePage);

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_elite_api_services__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TeamsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TeamsPage = (function () {
    /* teams = [
      { id: 1, name: 'Fenerbahçe' },
      { id: 2, name: 'Galatasaray' },
      { id: 3, name: 'Beşiktaş' }
    ] */
    function TeamsPage(navCtrl, navParams, eliteApi, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eliteApi = eliteApi;
        this.loadingController = loadingController;
        this.teams = [];
    }
    TeamsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var selectedTourney = this.navParams.data;
        var loader = this.loadingController.create({
            content: 'Geting data..'
        });
        loader.present().then(function () {
            _this.eliteApi.getTournamentData(selectedTourney.id)
                .subscribe(function (data) {
                _this.allTeams = data.teams;
                _this.allTeamDivisions =
                    __WEBPACK_IMPORTED_MODULE_2_lodash__["chain"](data.teams)
                        .groupBy('division')
                        .toPairs()
                        .map(function (item) { return __WEBPACK_IMPORTED_MODULE_2_lodash__["zipObject"](['divisionName', 'divisionTeams'], item); })
                        .value();
                console.log(JSON.stringify(_this.allTeamDivisions));
                _this.teams = _this.allTeamDivisions;
                console.log('division teams:', _this.teams);
                loader.dismiss();
            });
        });
        console.log('ionViewDidLoad TeamsPage');
    };
    TeamsPage.prototype.itemTapped = function (event, team) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages__["d" /* TeamHomePage */], team);
    };
    TeamsPage.prototype.updateTeams = function () {
        /* if (this.queryText.length > 3) { */
        var queryTextLower = this.queryText.toLocaleLowerCase();
        var fiteredTeams = [];
        __WEBPACK_IMPORTED_MODULE_2_lodash__["forEach"](this.allTeamDivisions, function (td) {
            var teams = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](td.divisionTeams, function (t) { return t.name.toLowerCase().includes(queryTextLower); });
            if (teams.length) {
                fiteredTeams.push({ divisionName: td.divisionName, divisionTeams: teams });
            }
        });
        this.teams = fiteredTeams;
        /* } */
    };
    return TeamsPage;
}());
TeamsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-teams',template:/*ion-inline-start:"/Users/borakasmer/NavigateIonic/src/pages/teams/teams.html"*/'<!--\n  Generated template for the TeamsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Teams</ion-title>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-searchbar placeholder="Search" [(ngModel)]="queryText" (ionInput)="updateTeams()">\n\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item-group *ngFor="let division of teams">\n      <ion-item-divider color="secondary">{{division.divisionName}}</ion-item-divider>\n      <button ion-item *ngFor="let team of division.divisionTeams" (click)="itemTapped($event,team)">\n        {{team.name}}\n      </button>\n    </ion-item-group>\n  </ion-list>\n\n  <!-- <button ion-item (click)="itemTapped()">\n     Galatasaray\n    </button> -->\n\n</ion-content>'/*ion-inline-end:"/Users/borakasmer/NavigateIonic/src/pages/teams/teams.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__shared_elite_api_services__["a" /* EliteApi */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], TeamsPage);

//# sourceMappingURL=teams.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared__ = __webpack_require__(418);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the TeamDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TeamDetailPage = (function () {
    function TeamDetailPage(navCtrl, navParams, eliteApi, alertController, toastController, userSettings) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eliteApi = eliteApi;
        this.alertController = alertController;
        this.toastController = toastController;
        this.userSettings = userSettings;
        this.isFollowing = false;
        this.useDateFilter = false;
        //this.team=this.navParams.data;
        console.log("data:", this.navParams);
    }
    TeamDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad TeamDetailPage');
        this.team = this.navParams.data;
        this.tourneyData = this.eliteApi.getCurrentTourney();
        this.games = __WEBPACK_IMPORTED_MODULE_2_lodash__["chain"](this.tourneyData.games)
            .filter(function (g) { return g.team1Id === _this.team.id || g.team2Id === _this.team.id; })
            .map(function (g) {
            var isTeam1 = (g.team1Id === _this.team.id);
            /* console.log(g.team1Id)
            console.log(this.team.id)
            console.log(isTeam1);
            console.log(g.team1Score);
            console.log(g.team2Score); */
            var opponentName = isTeam1 ? g.team2 : g.team1;
            var scoreDisplay = _this.getScoreDisplay(isTeam1, g.team1Score, g.team2Score);
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
        this.teamStanding = __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](this.tourneyData.standings, { 'teamId': this.team.id });
        this.userSettings.isFavoriteTeam(this.team.id).then(function (value) { return _this.isFollowing = value; });
    };
    TeamDetailPage.prototype.getScoreDisplay = function (isTeam1, team1Score, team2Score) {
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
    };
    TeamDetailPage.prototype.goHome = function () {
        this.navCtrl.parent.parent.popToRoot();
    };
    TeamDetailPage.prototype.gameClicked = function ($event, game) {
        /*  console.log(JSON.stringify(game)); */
        var sourceGame = this.tourneyData.games.find(function (g) { return g.id == game.gameId; });
        /* console.log("Source:" + JSON.stringify(sourceGame)); */
        this.navCtrl.parent.parent.push(__WEBPACK_IMPORTED_MODULE_4__pages__["a" /* GamePage */], sourceGame);
        //this.navCtrl.push(GamePage, sourceGame);
    };
    TeamDetailPage.prototype.dateChanged = function () {
        var _this = this;
        if (this.useDateFilter) {
            this.games = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](this.allGames, function (g) { return __WEBPACK_IMPORTED_MODULE_3_moment__(g.time).isSame(_this.dateFilter, 'day'); });
        }
        else {
            this.games = this.allGames;
        }
    };
    TeamDetailPage.prototype.getScoreWorL = function (game) {
        return game.scoreDisplay ? game.scoreDisplay[0] : '';
    };
    TeamDetailPage.prototype.getScoreDisplayBadgeClass = function (game) {
        var css;
        css = game.scoreDisplay.indexOf('W:') === 0 ? 'primary' : (game.scoreDisplay.indexOf('L:') != -1 ? 'danger' : 'light');
        return css;
    };
    TeamDetailPage.prototype.refreshAll = function (refresher) {
        var _this = this;
        this.eliteApi.refreshCurrentTourney().subscribe(function () {
            refresher.complete();
            _this.ionViewDidLoad();
        });
    };
    TeamDetailPage.prototype.toggleFollow = function () {
        var _this = this;
        if (this.isFollowing) {
            var confirm_1 = this.alertController.create({
                title: 'Unfollow?',
                message: 'Are you sure you want to unfollow?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: function () {
                            _this.isFollowing = false;
                            _this.userSettings.unforiteTeam(_this.team);
                            var toast = _this.toastController.create({
                                message: 'You have unfollowed ' + _this.team.name,
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
            confirm_1.present();
        }
        else {
            this.isFollowing = true;
            this.userSettings.favoriteTeam(this.team, this.tourneyData.tournament.id, this.tourneyData.tournament.name);
        }
    };
    return TeamDetailPage;
}());
TeamDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-team-detail',template:/*ion-inline-start:"/Users/borakasmer/NavigateIonic/src/pages/team-detail/team-detail.html"*/'<!--\n  Generated template for the TeamDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <!--  <ion-title>{{team.name}}</ion-title> -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h2>Team Detail</h2>\n  <ion-refresher (ionRefresh)="refreshAll($event)">\n    <ion-refresher-content>\n\n    </ion-refresher-content>\n  </ion-refresher>\n  <!-- <h3>Name:{{team.name}}</h3> -->\n  <ion-card>\n    <ion-card-content *ngIf="teamStanding!=undifined">\n      <ion-row>\n        <ion-col width-50>\n          <h2>Record: {{teamStanding.wins}}--{{teamStanding.losses}}</h2>\n          <p>Coach: {{team.coach}}</p>\n        </ion-col>\n        <ion-col width-50 text-right>\n          <button outline (click)="toggleFollow()" *ngIf="!isFollowing">\n           <ion-icon name="star"></ion-icon>\n           Add Favorite\n         </button>\n          <button (click)="toggleFollow()" *ngIf="isFollowing">\n           <ion-icon name="star"></ion-icon>\n         </button>\n        </ion-col>\n      </ion-row>\n      <ion-item>\n        <ion-label>Select Date:</ion-label>\n        <ion-toggle [(ngModel)]="useDateFilter" (ionChange)="dateChanged()"> </ion-toggle>\n        <ion-datetime displayFormat="M/D/YYYY" pickerfORMAT="M/D/YYYY" [(ngModel)]="dateFilter" (ionChange)="dateChanged()" ([disabled])="!useDateFilter"></ion-datetime>\n\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n  <ion-list>\n    <ion-item *ngFor="let game of games" (click)="gameClicked($event,game)">\n      <ion-row>\n        <ion-col width-20>\n          <p>{{game.time | date:\'M/d/yy\'}}</p>\n          <p>{{game.time | date:shortTime}}</p>\n        </ion-col>\n        <ion-col width-60>\n          <p>{{game.homeAway}} {{game.opponent}}</p>\n          <p>{{game.location}}</p>\n        </ion-col>\n        <ion-col width-20>\n          <h4>{{game.scoreDisplay}}</h4>\n          <ion-badge [color]="getScoreDisplayBadgeClass(game)">{{getScoreWorL(game)}}</ion-badge>\n        </ion-col>\n      </ion-row>\n      <!-- {{game.opponent}} -->\n    </ion-item>\n  </ion-list>\n\n  <button (click)="goHome()">Go Home</button>\n</ion-content>'/*ion-inline-end:"/Users/borakasmer/NavigateIonic/src/pages/team-detail/team-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__shared_shared__["a" /* EliteApi */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__shared_shared__["b" /* UserSettings */]])
], TeamDetailPage);

//# sourceMappingURL=team-detail.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EliteApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EliteApi = (function () {
    function EliteApi(http) {
        this.http = http;
        this.baseUrl = "https://elite-schedule-app-1bbf9.firebaseio.com";
        this.currentTournament = {};
        this.tourneyData = {};
    }
    EliteApi.prototype.getTournaments = function () {
        return this.http.get(this.baseUrl + "/tournaments.json")
            .map(function (result) { return result.json(); });
    };
    EliteApi.prototype.getTournamentData = function (ID, forceRefresh) {
        var _this = this;
        if (forceRefresh === void 0) { forceRefresh = false; }
        if (!forceRefresh && this.tourneyData[ID]) {
            this.currentTournament = this.tourneyData[ID];
            console.log("no need to make HTTP call");
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.currentTournament);
        }
        console.log("about to to make HTTP call");
        return this.http.get(this.baseUrl + "/tournaments-data/" + ID + ".json")
            .map(function (result) {
            _this.tourneyData[ID] = result.json();
            _this.currentTournament = _this.tourneyData[ID];
            return _this.currentTournament;
        });
    };
    EliteApi.prototype.refreshCurrentTourney = function () {
        return this.getTournamentData(this.currentTournament.tournament.id, true);
    };
    EliteApi.prototype.getCurrentTourney = function () {
        return this.currentTournament;
    };
    return EliteApi;
}());
EliteApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], EliteApi);

//# sourceMappingURL=elite-api.services.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StandingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_elite_api_services__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Lodash__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_Lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the StandingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var StandingsPage = (function () {
    function StandingsPage(navCtrl, navParams, eliteApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eliteApi = eliteApi;
        this.divisionFilter = 'divison';
    }
    StandingsPage.prototype.ionViewDidLoad = function () {
        this.team = this.navParams.data;
        var tourneyData = this.eliteApi.getCurrentTourney();
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
    };
    StandingsPage.prototype.filterDivision = function () {
        var _this = this;
        if (this.divisionFilter === "all") {
            this.standings = this.allStandings;
        }
        else {
            this.standings = __WEBPACK_IMPORTED_MODULE_3_Lodash__["filter"](this.allStandings, function (s) { return s.division === _this.team.division; });
        }
    };
    StandingsPage.prototype.getHeader = function (record, recordIndex, records) {
        if (recordIndex === 0 || record.division != records[recordIndex - 1].division) {
            return record.division;
        }
        return null;
    };
    return StandingsPage;
}());
StandingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-standings',template:/*ion-inline-start:"/Users/borakasmer/NavigateIonic/src/pages/standings/standings.html"*/'<!--\n  Generated template for the StandingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <!-- <ion-title>Standings</ion-title> -->\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-segment color="secondary" [(ngModel)]="divisionFilter" (ionChange)="filterDivision($event)">\n      <ion-segment-button value="division">Division</ion-segment-button>\n      <ion-segment-button value="all">All</ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <h2>Standings</h2> -->\n  <ion-list [virtualScroll]="standings" [approxItemHeight]="\'132px\'" [headerFn]="getHeader">\n    <ion-item-divider color="secondary" *virtualHeader="let header">\n      {{header}}\n    </ion-item-divider>\n    <ion-item *virtualItem="let team">\n      <ion-row>\n        <ion-col>\n          <h2 color="primary"> {{team.teamName}}</h2>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <h4>Wins</h4>\n        </ion-col>\n        <ion-col>\n          <h4>Losses</h4>\n        </ion-col>\n        <ion-col>\n          <h4>Pct</h4>\n        </ion-col>\n        <ion-col>\n          <h4>PF</h4>\n        </ion-col>\n        <ion-col>\n          <h4>PA</h4>\n        </ion-col>\n        <ion-col>\n          <h4>Diff</h4>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <h4>{{team.wins}}</h4>\n        </ion-col>\n        <ion-col>\n          <h4>{{team.losses}}</h4>\n        </ion-col>\n        <ion-col>\n          <h4>{{team.winningPct}}</h4>\n        </ion-col>\n        <ion-col>\n          <h4>{{team.pointsFor}}</h4>\n        </ion-col>\n        <ion-col>\n          <h4>{{team.pointsAgainst}}</h4>\n        </ion-col>\n        <ion-col>\n          <h4>{{team.pointsDiff}}</h4>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-item-group *ngFor=\'let division of allStandings\'>\n\n      <ion-item *ngFor="let team of division.divisionStandings">\n\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/borakasmer/NavigateIonic/src/pages/standings/standings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__shared_elite_api_services__["a" /* EliteApi */]])
], StandingsPage);

//# sourceMappingURL=standings.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TeamHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TeamHomePage = (function () {
    function TeamHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teamDetailTab = __WEBPACK_IMPORTED_MODULE_2__pages__["c" /* TeamDetailPage */];
        this.standingsTab = __WEBPACK_IMPORTED_MODULE_2__pages__["b" /* StandingsPage */];
        this.team = this.navParams.data;
    }
    TeamHomePage.prototype.goHome = function () {
        //this.navCtrl.push(MyTeamsPage);
        this.navCtrl.popToRoot();
    };
    TeamHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeamHomePage');
    };
    return TeamHomePage;
}());
TeamHomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-team-home',template:/*ion-inline-start:"/Users/borakasmer/NavigateIonic/src/pages/team-home/team-home.html"*/'<!--\n  Generated template for the TeamHomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{team.name}}</ion-title>\n    <ion-buttons end>\n      <button (click)="goHome()">\n        <ion-icon name="home"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-tabs>\n  <ion-tab tabTitle="Team" [root]="teamDetailTab" [rootParams]="team" tabIcon="basketball"></ion-tab>\n  <ion-tab tabTitle="Standings" [root]="standingsTab" [rootParams]="team" tabIcon="podium"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/borakasmer/NavigateIonic/src/pages/team-home/team-home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], TeamHomePage);

//# sourceMappingURL=team-home.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamDetailPageModule", function() { return TeamDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_detail__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TeamDetailPageModule = (function () {
    function TeamDetailPageModule() {
    }
    return TeamDetailPageModule;
}());
TeamDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__team_detail__["a" /* TeamDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__team_detail__["a" /* TeamDetailPage */]),
        ],
    })
], TeamDetailPageModule);

//# sourceMappingURL=team-detail.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandingsPageModule", function() { return StandingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__standings__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StandingsPageModule = (function () {
    function StandingsPageModule() {
    }
    return StandingsPageModule;
}());
StandingsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__standings__["a" /* StandingsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__standings__["a" /* StandingsPage */]),
        ],
    })
], StandingsPageModule);

//# sourceMappingURL=standings.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamHomePageModule", function() { return TeamHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_home__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TeamHomePageModule = (function () {
    function TeamHomePageModule() {
    }
    return TeamHomePageModule;
}());
TeamHomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__team_home__["a" /* TeamHomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__team_home__["a" /* TeamHomePage */]),
        ],
    })
], TeamHomePageModule);

//# sourceMappingURL=team-home.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsPageModule", function() { return TeamsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teams__ = __webpack_require__(184);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TeamsPageModule = (function () {
    function TeamsPageModule() {
    }
    return TeamsPageModule;
}());
TeamsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__teams__["a" /* TeamsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__teams__["a" /* TeamsPage */]),
        ],
    })
], TeamsPageModule);

//# sourceMappingURL=teams.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TournamentsPageModule", function() { return TournamentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tournaments__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TournamentsPageModule = (function () {
    function TournamentsPageModule() {
    }
    return TournamentsPageModule;
}());
TournamentsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tournaments__["a" /* TournamentsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tournaments__["a" /* TournamentsPage */]),
        ],
    })
], TournamentsPageModule);

//# sourceMappingURL=tournaments.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTeamsPageModule", function() { return MyTeamsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_teams__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyTeamsPageModule = (function () {
    function MyTeamsPageModule() {
    }
    return MyTeamsPageModule;
}());
MyTeamsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_teams__["a" /* MyTeamsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_teams__["a" /* MyTeamsPage */]),
        ],
    })
], MyTeamsPageModule);

//# sourceMappingURL=my-teams.module.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VibrationPageModule", function() { return VibrationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vibration__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VibrationPageModule = (function () {
    function VibrationPageModule() {
    }
    return VibrationPageModule;
}());
VibrationPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__vibration__["a" /* VibrationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vibration__["a" /* VibrationPage */]),
        ],
    })
], VibrationPageModule);

//# sourceMappingURL=vibration.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VibrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the VibrationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var VibrationPage = (function () {
    function VibrationPage(navCtrl, navParams, vibration) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vibration = vibration;
    }
    VibrationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VibrationPage');
    };
    VibrationPage.prototype.vibrate = function () {
        this.vibration.vibrate(1000);
    };
    VibrationPage.prototype.vibrateRhythm = function () {
        this.vibration.vibrate([2000, 1000, 500]);
    };
    return VibrationPage;
}());
VibrationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-vibration',template:/*ion-inline-start:"/Users/borakasmer/NavigateIonic/src/pages/vibration/vibration.html"*/'<!--\n  Generated template for the VibrationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Vibration</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<button ion-button full (click)="vibrate()">Vibrate</button>\n<button ion-button full (click)="vibrateRhythm()">Vibrate Rhythm</button>\n</ion-content>\n'/*ion-inline-end:"/Users/borakasmer/NavigateIonic/src/pages/vibration/vibration.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */]])
], VibrationPage);

//# sourceMappingURL=vibration.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoLocationPageModule", function() { return GeoLocationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geo_location__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GeoLocationPageModule = (function () {
    function GeoLocationPageModule() {
    }
    return GeoLocationPageModule;
}());
GeoLocationPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__geo_location__["a" /* GeoLocationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__geo_location__["a" /* GeoLocationPage */]),
            __WEBPACK_IMPORTED_MODULE_3__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBJRR34KTxiwTUQB9KIr2f_-oCFFri2Xfw'
            })
        ],
    })
], GeoLocationPageModule);

//# sourceMappingURL=geo-location.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeoLocationPage = (function () {
    function GeoLocationPage(navCtrl, navParams, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
    }
    GeoLocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GeoLocationPage');
    };
    GeoLocationPage.prototype.getGeoLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (res) {
            _this.location = {
                lat: res.coords.latitude,
                lng: res.coords.longitude,
                zoom: 12,
                markerLabel: "You are here!"
            };
        });
    };
    return GeoLocationPage;
}());
GeoLocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-geo-location',template:/*ion-inline-start:"/Users/borakasmer/NavigateIonic/src/pages/geo-location/geo-location.html"*/'<!--\n  Generated template for the GeoLocationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>GeoLocation</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button full (click)="getGeoLocation()">GET GEOLOCATION</button>\n  <div *ngIf="location">\n    <h3>Latitude: {{location.lat}}</h3>\n    <h3>Longitude: {{location.lng}}</h3>\n    <agm-map [latitude]="location.lat" [longitude]="location.lng">\n      <agm-marker [latitude]="location.lat" [longitude]="location.lng"></agm-marker>\n    </agm-map>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/borakasmer/NavigateIonic/src/pages/geo-location/geo-location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
], GeoLocationPage);

//# sourceMappingURL=geo-location.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPageModule", function() { return CameraPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camera__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CameraPageModule = (function () {
    function CameraPageModule() {
    }
    return CameraPageModule;
}());
CameraPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__camera__["a" /* CameraPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__camera__["a" /* CameraPage */]),
        ],
    })
], CameraPageModule);

//# sourceMappingURL=camera.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CameraPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CameraPage = (function () {
    function CameraPage(navCtrl, navParams, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
    }
    CameraPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CameraPage');
    };
    CameraPage.prototype.takePicture = function () {
        var _this = this;
        var options = {
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.PNG,
            targetHeight: 500,
            targetWidth: 500,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then(function (imgageUri) {
            _this.imgSrc = imgageUri;
        });
    };
    return CameraPage;
}());
CameraPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-camera',template:/*ion-inline-start:"/Users/borakasmer/NavigateIonic/src/pages/camera/camera.html"*/'<!--\n  Generated template for the CameraPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Camera</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button full (click)="takePicture()">Take Picture</button>\n  <ion-card *ngIf="imgSrc">\n    <img [src]="imgSrc">\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/borakasmer/NavigateIonic/src/pages/camera/camera.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
], CameraPage);

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__my_teams_my_teams__ = __webpack_require__(55);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tournaments_tournaments__ = __webpack_require__(56);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_game__ = __webpack_require__(183);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__game_game__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__team_detail_team_detail__ = __webpack_require__(187);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__team_detail_team_detail__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__standings_standings__ = __webpack_require__(303);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__standings_standings__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__team_home_team_home__ = __webpack_require__(304);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__team_home_team_home__["a"]; });






//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(380);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_my_teams_my_teams_module__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tournaments_tournaments_module__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_teams_teams_module__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_team_detail_team_detail_module__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_game_game_module__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_my_teams_my_teams__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_standings_standings_module__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_team_home_team_home_module__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_elite_api_services__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_user_settings_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_map_map_module__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_vibration_vibration_module__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_vibration__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_geolocation__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_geo_location_geo_location_module__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_camera__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_camera_camera_module__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/game/game.module#GamePageModule', name: 'GamePage', segment: 'game', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/team-detail/team-detail.module#TeamDetailPageModule', name: 'TeamDetailPage', segment: 'team-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/standings/standings.module#StandingsPageModule', name: 'StandingsPage', segment: 'standings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/team-home/team-home.module#TeamHomePageModule', name: 'TeamHomePage', segment: 'team-home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/teams/teams.module#TeamsPageModule', name: 'TeamsPage', segment: 'teams', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tournaments/tournaments.module#TournamentsPageModule', name: 'TournamentsPage', segment: 'tournaments', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-teams/my-teams.module#MyTeamsPageModule', name: 'MyTeamsPage', segment: 'my-teams', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/vibration/vibration.module#VibrationPageModule', name: 'VibrationPage', segment: 'vibration', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/geo-location/geo-location.module#GeoLocationPageModule', name: 'GeoLocationPage', segment: 'geo-location', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/camera/camera.module#CameraPageModule', name: 'CameraPage', segment: 'camera', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__pages_my_teams_my_teams_module__["MyTeamsPageModule"],
            __WEBPACK_IMPORTED_MODULE_7__pages_tournaments_tournaments_module__["TournamentsPageModule"],
            __WEBPACK_IMPORTED_MODULE_8__pages_teams_teams_module__["TeamsPageModule"],
            __WEBPACK_IMPORTED_MODULE_9__pages_team_detail_team_detail_module__["TeamDetailPageModule"],
            __WEBPACK_IMPORTED_MODULE_10__pages_game_game_module__["GamePageModule"],
            __WEBPACK_IMPORTED_MODULE_12__pages_standings_standings_module__["StandingsPageModule"],
            __WEBPACK_IMPORTED_MODULE_13__pages_team_home_team_home_module__["TeamHomePageModule"],
            __WEBPACK_IMPORTED_MODULE_15__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_18__pages_map_map_module__["MapPageModule"],
            __WEBPACK_IMPORTED_MODULE_19__pages_vibration_vibration_module__["VibrationPageModule"],
            __WEBPACK_IMPORTED_MODULE_22__pages_geo_location_geo_location_module__["GeoLocationPageModule"],
            __WEBPACK_IMPORTED_MODULE_24__pages_camera_camera_module__["CameraPageModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_my_teams_my_teams__["a" /* MyTeamsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_14__shared_elite_api_services__["a" /* EliteApi */],
            __WEBPACK_IMPORTED_MODULE_16__shared_user_settings_service__["a" /* UserSettings */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_camera__["a" /* Camera */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 188,
	"./af.js": 188,
	"./ar": 189,
	"./ar-dz": 190,
	"./ar-dz.js": 190,
	"./ar-kw": 191,
	"./ar-kw.js": 191,
	"./ar-ly": 192,
	"./ar-ly.js": 192,
	"./ar-ma": 193,
	"./ar-ma.js": 193,
	"./ar-sa": 194,
	"./ar-sa.js": 194,
	"./ar-tn": 195,
	"./ar-tn.js": 195,
	"./ar.js": 189,
	"./az": 196,
	"./az.js": 196,
	"./be": 197,
	"./be.js": 197,
	"./bg": 198,
	"./bg.js": 198,
	"./bn": 199,
	"./bn.js": 199,
	"./bo": 200,
	"./bo.js": 200,
	"./br": 201,
	"./br.js": 201,
	"./bs": 202,
	"./bs.js": 202,
	"./ca": 203,
	"./ca.js": 203,
	"./cs": 204,
	"./cs.js": 204,
	"./cv": 205,
	"./cv.js": 205,
	"./cy": 206,
	"./cy.js": 206,
	"./da": 207,
	"./da.js": 207,
	"./de": 208,
	"./de-at": 209,
	"./de-at.js": 209,
	"./de-ch": 210,
	"./de-ch.js": 210,
	"./de.js": 208,
	"./dv": 211,
	"./dv.js": 211,
	"./el": 212,
	"./el.js": 212,
	"./en-au": 213,
	"./en-au.js": 213,
	"./en-ca": 214,
	"./en-ca.js": 214,
	"./en-gb": 215,
	"./en-gb.js": 215,
	"./en-ie": 216,
	"./en-ie.js": 216,
	"./en-nz": 217,
	"./en-nz.js": 217,
	"./eo": 218,
	"./eo.js": 218,
	"./es": 219,
	"./es-do": 220,
	"./es-do.js": 220,
	"./es.js": 219,
	"./et": 221,
	"./et.js": 221,
	"./eu": 222,
	"./eu.js": 222,
	"./fa": 223,
	"./fa.js": 223,
	"./fi": 224,
	"./fi.js": 224,
	"./fo": 225,
	"./fo.js": 225,
	"./fr": 226,
	"./fr-ca": 227,
	"./fr-ca.js": 227,
	"./fr-ch": 228,
	"./fr-ch.js": 228,
	"./fr.js": 226,
	"./fy": 229,
	"./fy.js": 229,
	"./gd": 230,
	"./gd.js": 230,
	"./gl": 231,
	"./gl.js": 231,
	"./gom-latn": 232,
	"./gom-latn.js": 232,
	"./he": 233,
	"./he.js": 233,
	"./hi": 234,
	"./hi.js": 234,
	"./hr": 235,
	"./hr.js": 235,
	"./hu": 236,
	"./hu.js": 236,
	"./hy-am": 237,
	"./hy-am.js": 237,
	"./id": 238,
	"./id.js": 238,
	"./is": 239,
	"./is.js": 239,
	"./it": 240,
	"./it.js": 240,
	"./ja": 241,
	"./ja.js": 241,
	"./jv": 242,
	"./jv.js": 242,
	"./ka": 243,
	"./ka.js": 243,
	"./kk": 244,
	"./kk.js": 244,
	"./km": 245,
	"./km.js": 245,
	"./kn": 246,
	"./kn.js": 246,
	"./ko": 247,
	"./ko.js": 247,
	"./ky": 248,
	"./ky.js": 248,
	"./lb": 249,
	"./lb.js": 249,
	"./lo": 250,
	"./lo.js": 250,
	"./lt": 251,
	"./lt.js": 251,
	"./lv": 252,
	"./lv.js": 252,
	"./me": 253,
	"./me.js": 253,
	"./mi": 254,
	"./mi.js": 254,
	"./mk": 255,
	"./mk.js": 255,
	"./ml": 256,
	"./ml.js": 256,
	"./mr": 257,
	"./mr.js": 257,
	"./ms": 258,
	"./ms-my": 259,
	"./ms-my.js": 259,
	"./ms.js": 258,
	"./my": 260,
	"./my.js": 260,
	"./nb": 261,
	"./nb.js": 261,
	"./ne": 262,
	"./ne.js": 262,
	"./nl": 263,
	"./nl-be": 264,
	"./nl-be.js": 264,
	"./nl.js": 263,
	"./nn": 265,
	"./nn.js": 265,
	"./pa-in": 266,
	"./pa-in.js": 266,
	"./pl": 267,
	"./pl.js": 267,
	"./pt": 268,
	"./pt-br": 269,
	"./pt-br.js": 269,
	"./pt.js": 268,
	"./ro": 270,
	"./ro.js": 270,
	"./ru": 271,
	"./ru.js": 271,
	"./sd": 272,
	"./sd.js": 272,
	"./se": 273,
	"./se.js": 273,
	"./si": 274,
	"./si.js": 274,
	"./sk": 275,
	"./sk.js": 275,
	"./sl": 276,
	"./sl.js": 276,
	"./sq": 277,
	"./sq.js": 277,
	"./sr": 278,
	"./sr-cyrl": 279,
	"./sr-cyrl.js": 279,
	"./sr.js": 278,
	"./ss": 280,
	"./ss.js": 280,
	"./sv": 281,
	"./sv.js": 281,
	"./sw": 282,
	"./sw.js": 282,
	"./ta": 283,
	"./ta.js": 283,
	"./te": 284,
	"./te.js": 284,
	"./tet": 285,
	"./tet.js": 285,
	"./th": 286,
	"./th.js": 286,
	"./tl-ph": 287,
	"./tl-ph.js": 287,
	"./tlh": 288,
	"./tlh.js": 288,
	"./tr": 289,
	"./tr.js": 289,
	"./tzl": 290,
	"./tzl.js": 290,
	"./tzm": 291,
	"./tzm-latn": 292,
	"./tzm-latn.js": 292,
	"./tzm.js": 291,
	"./uk": 293,
	"./uk.js": 293,
	"./ur": 294,
	"./ur.js": 294,
	"./uz": 295,
	"./uz-latn": 296,
	"./uz-latn.js": 296,
	"./uz.js": 295,
	"./vi": 297,
	"./vi.js": 297,
	"./x-pseudo": 298,
	"./x-pseudo.js": 298,
	"./yo": 299,
	"./yo.js": 299,
	"./zh-cn": 300,
	"./zh-cn.js": 300,
	"./zh-hk": 301,
	"./zh-hk.js": 301,
	"./zh-tw": 302,
	"./zh-tw.js": 302
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 417;

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__elite_api_services__ = __webpack_require__(22);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__elite_api_services__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_settings_service__ = __webpack_require__(57);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__user_settings_service__["a"]; });


//# sourceMappingURL=shared.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_my_teams_my_teams__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tournaments_tournaments__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_user_settings_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_elite_api_services__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pages__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_vibration_vibration__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_geo_location_geo_location__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_camera_camera__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, userSettings, loadingController, eliteApi, events) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.userSettings = userSettings;
        this.loadingController = loadingController;
        this.eliteApi = eliteApi;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_my_teams_my_teams__["a" /* MyTeamsPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //this.statusBar.hide();
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.refreshFavorites();
            _this.events.subscribe("favorites:changed", function () { return _this.refreshFavorites(); });
        });
    };
    MyApp.prototype.refreshFavorites = function () {
        this.favoriteTeams = this.userSettings.getAllFavorites();
    };
    MyApp.prototype.goToTeam = function (favorite) {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'Şimdi Geliyor...',
            dismissOnPageChange: true
        });
        loader.present();
        this.eliteApi.getTournamentData(favorite.tournamentId).subscribe(function (res) { return _this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_pages__["d" /* TeamHomePage */], favorite.team); });
    };
    MyApp.prototype.goHome = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_my_teams_my_teams__["a" /* MyTeamsPage */]);
    };
    MyApp.prototype.goVibration = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_vibration_vibration__["a" /* VibrationPage */]);
    };
    MyApp.prototype.goGeoLocation = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_geo_location_geo_location__["a" /* GeoLocationPage */]);
    };
    MyApp.prototype.goTournaments = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_tournaments_tournaments__["a" /* TournamentsPage */]);
    };
    MyApp.prototype.goCamera = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_11__pages_camera_camera__["a" /* CameraPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/borakasmer/NavigateIonic/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <ion-list-header>Navigate</ion-list-header>\n      <button menuClose ion-item (click)="goHome()"> <ion-icon name="home"></ion-icon>Home</button>\n      <button menuClose ion-item (click)="goVibration()"> <ion-icon name="pulse"></ion-icon>Vibration</button>\n      <button menuClose ion-item (click)="goGeoLocation()"> <ion-icon name="locate"></ion-icon>Geolocation</button>\n      <button menuClose ion-item (click)="goCamera()"> <ion-icon name="camera"></ion-icon>Camera</button>\n      <button menuClose ion-item (click)="goTournaments()">Find a Tournament</button>\n    </ion-list>\n    <ion-list>\n      <ion-list-header>Favorites</ion-list-header>\n      <button menuClose ion-item *ngFor="let fav of favoriteTeams" (click)="goToTeam(fav)">\n        {{fav.team.name}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/borakasmer/NavigateIonic/src/app/app.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_6__shared_user_settings_service__["a" /* UserSettings */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_7__shared_elite_api_services__["a" /* EliteApi */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tournaments_tournaments__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_elite_api_services__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_user_settings_service__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MyTeamsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MyTeamsPage = (function () {
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
    function MyTeamsPage(navCtrl, navParams, loadingController, eliteApi, userSettings) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.eliteApi = eliteApi;
        this.userSettings = userSettings;
    }
    MyTeamsPage.prototype.goToTournament = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tournaments_tournaments__["a" /* TournamentsPage */]);
    };
    MyTeamsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyTeamsPage');
    };
    MyTeamsPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidEnter MyTeamsPage');
        this.favorites = this.userSettings.getAllFavorites();
        //console.log(this.favorites);
    };
    MyTeamsPage.prototype.favoriteTapped = function ($event, favorite) {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'Patlama Bekle :)...',
            dismissOnPageChange: true
        });
        loader.present();
        this.eliteApi.getTournamentData(favorite.tournamentId)
            .subscribe(function (t) { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages__["d" /* TeamHomePage */], favorite.team); });
    };
    return MyTeamsPage;
}());
MyTeamsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-teams',template:/*ion-inline-start:"/Users/borakasmer/NavigateIonic/src/pages/my-teams/my-teams.html"*/'<!--\n  Generated template for the MyTeamsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Elite Schedule</ion-title>\n  </ion-navbar>\n  <ion-toolbar color="secondary">\n    <ion-title>My Teams</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngIf="favorites">\n    <ion-list>\n      <ion-list-header class="my-teams-header">Followed Teams</ion-list-header>\n      <button ion-item *ngFor="let item of favorites" (click)="favoriteTapped($event,item)">\n      <ion-icon name="star"></ion-icon>\n      {{item.team.name}}\n      <p>{{item.tournamentName}}</p>\n    </button>\n    </ion-list>\n    <ion-card-content>\n      <p>To follow more teams, select tournament, then you can follow teams from their team page.\n      </p>\n      <button ion-button round (click)="goToTournament()">\n      <ion-icon name="search"></ion-icon>\n      Find Your Tournament\n  </button>\n    </ion-card-content>\n  </ion-card>\n  <!-- <button ion-button secondary menuToggle>Toggle Menu</button> -->\n  <ion-card *ngIf="!favorites">\n    <ion-card-header>No Followed Teams</ion-card-header>\n    <ion-card-content>\n      <p>You are not currently following any teams.</p>\n      <p>First select Tournament, then you can follow teams from their team page.</p>\n      <button ion-button round (click)="goToTournament()">\n          <ion-icon name="search"></ion-icon>\n          Find Your Tournament\n      </button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/borakasmer/NavigateIonic/src/pages/my-teams/my-teams.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__shared_elite_api_services__["a" /* EliteApi */],
        __WEBPACK_IMPORTED_MODULE_5__shared_user_settings_service__["a" /* UserSettings */]])
], MyTeamsPage);

//# sourceMappingURL=my-teams.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teams_teams__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_elite_api_services__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TournamentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TournamentsPage = (function () {
    function TournamentsPage(navCtrl, navParams, eliteApi, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eliteApi = eliteApi;
        this.loadingController = loadingController;
    }
    TournamentsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'Getting tournaments...',
            spinner: 'circles'
        });
        loader.present().then(function () {
            _this.eliteApi.getTournaments().subscribe(function (result) { return _this.tournaments = result; }, function (err) { return console.log(err); }, function () {
                console.log("ok");
                loader.dismiss();
            });
        });
        console.log('ionViewDidLoad TournamentsPage');
    };
    TournamentsPage.prototype.goBack = function () {
        //this.navCtrl.push(TeamsPage);
        this.navCtrl.pop();
    };
    TournamentsPage.prototype.itemTapped = function ($event, tourney) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__teams_teams__["a" /* TeamsPage */], tourney);
    };
    return TournamentsPage;
}());
TournamentsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tournaments',template:/*ion-inline-start:"/Users/borakasmer/NavigateIonic/src/pages/tournaments/tournaments.html"*/'<!--\n  Generated template for the TournamentsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Select a Tournament</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let item of tournaments" (click)="itemTapped($event,item)">\n      {{item.name}}\n    </button>\n    <!--  <button ion-item (click)="itemTapped()">\n      Summer Show Down\n    </button> -->\n  </ion-list>\n  <button ion-button icon-rewind (click)="goBack()">\n  <ion-icon name="rewind"></ion-icon>\n  Go Back\n</button>\n</ion-content>'/*ion-inline-end:"/Users/borakasmer/NavigateIonic/src/pages/tournaments/tournaments.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__shared_elite_api_services__["a" /* EliteApi */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], TournamentsPage);

//# sourceMappingURL=tournaments.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserSettings = (function () {
    function UserSettings(storage, events) {
        this.storage = storage;
        this.events = events;
    }
    UserSettings.prototype.favoriteTeam = function (team, tournamentId, tournamentName) {
        var item = { team: team, tournamentId: tournamentId, tournamentName: tournamentName };
        this.storage.set(String(team.id), JSON.stringify(item));
        this.events.publish('favorites:changed');
    };
    UserSettings.prototype.unforiteTeam = function (team) {
        this.storage.remove(String(team.id));
        this.events.publish('favorites:changed');
    };
    UserSettings.prototype.isFavoriteTeam = function (teamId) {
        return this.storage.get(String(teamId)).then(function (value) { return value ? true : false; });
    };
    UserSettings.prototype.getAllFavorites = function () {
        var items = [];
        this.storage.forEach(function (value, key, index) {
            items.push(JSON.parse(value));
        }).then(function () { return items; });
        return items;
    };
    return UserSettings;
}());
UserSettings = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Events */]])
], UserSettings);

//# sourceMappingURL=user-settings.service.js.map

/***/ })

},[362]);
//# sourceMappingURL=main.js.map
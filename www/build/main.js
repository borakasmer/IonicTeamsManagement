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
	"../pages/barcode/barcode.module": [
		322
	],
	"../pages/camera/camera.module": [
		319
	],
	"../pages/dvcmotion/dvcmotion.module": [
		325
	],
	"../pages/game/game.module": [
		182
	],
	"../pages/geo-location/geo-location.module": [
		316
	],
	"../pages/map/map.module": [
		170
	],
	"../pages/my-teams/my-teams.module": [
		312
	],
	"../pages/notification/notification.module": [
		328
	],
	"../pages/standings/standings.module": [
		308
	],
	"../pages/team-detail/team-detail.module": [
		307
	],
	"../pages/team-home/team-home.module": [
		309
	],
	"../pages/teams/teams.module": [
		310
	],
	"../pages/tournaments/tournaments.module": [
		311
	],
	"../pages/vibration/vibration.module": [
		313
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_elite_api_services__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__(35);
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
        selector: 'page-game',template:/*ion-inline-start:"/Users/borakasmer/NavigateIonic/src/pages/game/game.html"*/'<!--\n  Generated template for the GamePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Game</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding *ngIf="game!=null">\n  <!-- <h3>Home Team</h3>\n  <button (click)="teamTapped(game.team1Id)">{{game.team1}}</button>\n  <h3>Away Team</h3>\n  <button (click)="teamTapped(game.team2Id)">{{game.team2}}</button> -->\n  <ion-row>\n    <ion-col width-50 text-center class="divider-col">\n      <button clear full (click)="teamTapped(game.team1Id)">Home</button>\n    </ion-col>\n    <ion-col width-50 text-center>\n      <button clear full (click)="teamTapped(game.team2Id)">Away</button>\n    </ion-col>\n  </ion-row>\n  <ion-row center>\n    <ion-col width-50 text-center class="divider-col" (click)="teamTapped(game.team1Id)">\n      <h4>{{game.team1}}</h4>\n    </ion-col>\n    <ion-col width-50 text-center (click)="teamTapped(game.team2Id)">\n      <h4>{{game.team2}}</h4>\n    </ion-col>\n  </ion-row>\n  <ion-row baseline class="top-bottom-border">\n    <ion-col text-center (click)="teamTapped(game.team1Id)">\n      <h1 [class.text-primary]="isWinner(game.team1Score,game.team2Score)">{{game.team1Score}}</h1>\n    </ion-col>\n    <ion-col text-center>Score</ion-col>\n    <ion-col text-center (click)="teamTapped(game.team2Id)">\n      <h1 [class.text-primary]="isWinner(game.team2Score,game.team1Score)">{{game.team2Score}}</h1>\n    </ion-col>\n  </ion-row>\n  <ion-card>\n    <ion-item>\n      <ion-icon name="calendar" item-left></ion-icon>\n      {{game.gameTime | date:\'M/d/yy\'}} {{game.gameTime | date:\'shortTime\'}}\n    </ion-item>\n    <ion-row>\n      <ion-col width-60>\n        <ion-label>{{game.location}}</ion-label>\n      </ion-col>\n      <ion-col width-40 text-right>\n        <button outline (click)="goToMap()">\n          <ion-icon name="map"></ion-icon>\n        </button>\n        <button outline (click)="goToDirections()">\n            <ion-icon name="navigate"></ion-icon>\n          </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/borakasmer/NavigateIonic/src/pages/game/game.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__(35);
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

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared__ = __webpack_require__(436);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(416);
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

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StandingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_elite_api_services__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Lodash__ = __webpack_require__(437);
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
            console.log(JSON.stringify(this.standings));
        }
        else {
            this.standings = __WEBPACK_IMPORTED_MODULE_3_Lodash__["filter"](this.allStandings, function (s) { return s.division === _this.team.division; });
        }
    };
    StandingsPage.prototype.getHeader = function (record, recordIndex, records) {
        console.log("Record:" + JSON.stringify(record));
        console.log("RecordIndex " + recordIndex);
        console.log("Records: " + JSON.stringify(records));
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
        selector: 'page-standings',template:/*ion-inline-start:"/Users/borakasmer/NavigateIonic/src/pages/standings/standings.html"*/'<!--\n  Generated template for the StandingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <!-- <ion-title>Standings</ion-title> -->\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-segment color="secondary" [(ngModel)]="divisionFilter" (ionChange)="filterDivision($event)">\n      <ion-segment-button value="division">Division</ion-segment-button>\n      <ion-segment-button value="all">All</ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <h2>Standings</h2> -->\n  <ion-list [virtualScroll]="standings" [approxItemHeight]="\'132px\'" [headerFn]="getHeader">\n    <ion-item-divider color="secondary" *virtualHeader="let header">\n      {{header}}\n    </ion-item-divider>\n    <ion-item *virtualItem="let team">\n      <ion-row>\n        <ion-col>\n          <h2 color="primary"> {{team.teamName}}</h2>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <h4>Wins</h4>\n        </ion-col>\n        <ion-col>\n          <h4>Losses</h4>\n        </ion-col>\n        <ion-col>\n          <h4>Pct</h4>\n        </ion-col>\n        <ion-col>\n          <h4>PF</h4>\n        </ion-col>\n        <ion-col>\n          <h4>PA</h4>\n        </ion-col>\n        <ion-col>\n          <h4>Diff</h4>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <h4>{{team.wins}}</h4>\n        </ion-col>\n        <ion-col>\n          <h4>{{team.losses}}</h4>\n        </ion-col>\n        <ion-col>\n          <h4>{{team.winningPct}}</h4>\n        </ion-col>\n        <ion-col>\n          <h4>{{team.pointsFor}}</h4>\n        </ion-col>\n        <ion-col>\n          <h4>{{team.pointsAgainst}}</h4>\n        </ion-col>\n        <ion-col>\n          <h4>{{team.pointsDiff}}</h4>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n  <!-- <ion-list>\n    <ion-item-group *ngFor=\'let division of allStandings\'>\n\n      <ion-item *ngFor="let team of division.divisionStandings">\n\n      </ion-item>\n    </ion-item-group>\n  </ion-list> -->\n</ion-content>'/*ion-inline-end:"/Users/borakasmer/NavigateIonic/src/pages/standings/standings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__shared_elite_api_services__["a" /* EliteApi */]])
], StandingsPage);

//# sourceMappingURL=standings.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(35);
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

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamDetailPageModule", function() { return TeamDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_detail__ = __webpack_require__(189);
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

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandingsPageModule", function() { return StandingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__standings__ = __webpack_require__(305);
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

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamHomePageModule", function() { return TeamHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_home__ = __webpack_require__(306);
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

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsPageModule", function() { return TeamsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TournamentsPageModule", function() { return TournamentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTeamsPageModule", function() { return MyTeamsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VibrationPageModule", function() { return VibrationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vibration__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_vibration__ = __webpack_require__(315);
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
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_vibration__["a" /* Vibration */]
        ]
    })
], VibrationPageModule);

//# sourceMappingURL=vibration.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VibrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(315);
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

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoLocationPageModule", function() { return GeoLocationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geo_location__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__(173);
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
            __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBJRR34KTxiwTUQB9KIr2f_-oCFFri2Xfw'
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]
        ]
    })
], GeoLocationPageModule);

//# sourceMappingURL=geo-location.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(318);
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

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPageModule", function() { return CameraPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camera__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(321);
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
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]
        ]
    })
], CameraPageModule);

//# sourceMappingURL=camera.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(321);
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

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodePageModule", function() { return BarcodePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__barcode__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BarcodePageModule = (function () {
    function BarcodePageModule() {
    }
    return BarcodePageModule;
}());
BarcodePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__barcode__["a" /* BarcodePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__barcode__["a" /* BarcodePage */]),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]
        ]
    })
], BarcodePageModule);

//# sourceMappingURL=barcode.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(324);
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
 * Generated class for the BarcodePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BarcodePage = (function () {
    function BarcodePage(navCtrl, navParams, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
    }
    BarcodePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BarcodePage');
    };
    BarcodePage.prototype.scanBarcode = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            return _this.results = barcodeData;
        }), function (err) {
            alert('Error : ${err}');
        };
    };
    ;
    BarcodePage.prototype.reset = function () {
        this.results = null;
    };
    BarcodePage.prototype.lookup = function () {
        window.open("http://www.upcindex.com/" + this.results.text, '_system');
    };
    return BarcodePage;
}());
BarcodePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-barcode',template:/*ion-inline-start:"/Users/borakasmer/NavigateIonic/src/pages/barcode/barcode.html"*/'<!--\n  Generated template for the BarcodePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Barcode</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button full (click)="scanBarcode()">SCAN</button>\n  <button ion-button full (click)="reset()" color="secondary">RESET</button>\n  <div *ngIf="results">\n    <h2>Format: {{results.format}}</h2>\n    <h2>Text: {{results.text}}</h2>\n\n    <button ion-button full (click)="lookup()">Lookup</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/borakasmer/NavigateIonic/src/pages/barcode/barcode.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
], BarcodePage);

//# sourceMappingURL=barcode.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DvcmotionPageModule", function() { return DvcmotionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dvcmotion__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device_motion__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DvcmotionPageModule = (function () {
    function DvcmotionPageModule() {
    }
    return DvcmotionPageModule;
}());
DvcmotionPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__dvcmotion__["a" /* DvcmotionPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dvcmotion__["a" /* DvcmotionPage */]),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_device_motion__["a" /* DeviceMotion */]
        ]
    })
], DvcmotionPageModule);

//# sourceMappingURL=dvcmotion.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DvcmotionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device_motion__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DvcmotionPage = (function () {
    function DvcmotionPage(navCtrl, navParams, deviceMotion) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.deviceMotion = deviceMotion;
    }
    DvcmotionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DvcmotionPage');
    };
    DvcmotionPage.prototype.startMonitor = function () {
        var _this = this;
        var option = {
            frequency: 200
        };
        this.subscription = this.deviceMotion.watchAcceleration(option).subscribe(function (acceleration) {
            _this.data = acceleration;
        });
    };
    DvcmotionPage.prototype.stopMonitor = function () {
        this.subscription.unsubscribe();
    };
    return DvcmotionPage;
}());
DvcmotionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-dvcmotion',template:/*ion-inline-start:"/Users/borakasmer/NavigateIonic/src/pages/dvcmotion/dvcmotion.html"*/'<ion-header>\n\n  <ion-navbar primary>\n    <button menuToggle>\n        <ion-icon name="menu"></ion-icon>      \n    </button>\n    <ion-title>Device Motiom</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button full (click)="startMonitor()">Start Motion</button>\n  <button ion-button full color="secondary" (click)="stopMonitor()">Stop Motion</button>\n  <ion-card *ngIf="data">\n    <ion-card-content>\n      <h2>x: {{data.x | number:\'1.4-4\'}}</h2>\n      <h2>y: {{data.y | number:\'1.4-4\'}}</h2>\n      <h2>z: {{data.z | number:\'1.4-4\'}}</h2>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/borakasmer/NavigateIonic/src/pages/dvcmotion/dvcmotion.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_device_motion__["a" /* DeviceMotion */]])
], DvcmotionPage);

//# sourceMappingURL=dvcmotion.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NotificationPageModule = (function () {
    function NotificationPageModule() {
    }
    return NotificationPageModule;
}());
NotificationPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */]),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__["a" /* LocalNotifications */]
        ]
    })
], NotificationPageModule);

//# sourceMappingURL=notification.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationPage = (function () {
    function NotificationPage(navCtrl, navParams, localNotifications, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.localNotifications = localNotifications;
        this.platform = platform;
        this.localNotifications.on('click', function (notification) {
            var data = JSON.parse(notification.data);
            _this.results = data.name;
            alert("Notification recevied! (" + data.name + ")");
        });
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
    };
    NotificationPage.prototype.setupNotification = function () {
        this.localNotifications.schedule([{
                id: 1,
                title: 'Test Notification',
                text: 'Well Done CoderBora',
                sound: this.platform.is('ios') ? 'file://sound.mp3' : 'file://beep.caf',
                data: {
                    id: 13,
                    name: 'Master of Proude'
                }
            }, {
                id: 2,
                title: 'Test Notification 2',
                text: 'Second Notify CoderBora',
                sound: this.platform.is('ios') ? 'file://sound.mp3' : 'file://beep.caf',
                data: {
                    id: 14,
                    name: 'Second Master of Proude'
                }
            }]);
    };
    return NotificationPage;
}());
NotificationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notification',template:/*ion-inline-start:"/Users/borakasmer/NavigateIonic/src/pages/notification/notification.html"*/'<ion-header>\n\n  <ion-navbar primary>\n    <button menuToggle>\n            <ion-icon name="menu"></ion-icon>      \n        </button>\n    <ion-title>Notification</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button full (click)="setupNotification()">Setup Notification</button>\n  <h2>{{results}}</h2>\n</ion-content>'/*ion-inline-end:"/Users/borakasmer/NavigateIonic/src/pages/notification/notification.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
], NotificationPage);

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__my_teams_my_teams__ = __webpack_require__(55);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tournaments_tournaments__ = __webpack_require__(56);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_game__ = __webpack_require__(183);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__game_game__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__team_detail_team_detail__ = __webpack_require__(189);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__team_detail_team_detail__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__standings_standings__ = __webpack_require__(305);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__standings_standings__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__team_home_team_home__ = __webpack_require__(306);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__team_home_team_home__["a"]; });






//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(390);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_my_teams_my_teams_module__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tournaments_tournaments_module__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_teams_teams_module__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_team_detail_team_detail_module__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_game_game_module__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_my_teams_my_teams__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_standings_standings_module__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_team_home_team_home_module__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_elite_api_services__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_user_settings_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_map_map_module__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_vibration_vibration_module__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_geo_location_geo_location_module__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_camera_camera_module__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_barcode_barcode_module__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_dvcmotion_dvcmotion_module__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_notification_notification_module__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_sqlite__ = __webpack_require__(187);
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
                    { loadChildren: '../pages/camera/camera.module#CameraPageModule', name: 'CameraPage', segment: 'camera', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/barcode/barcode.module#BarcodePageModule', name: 'BarcodePage', segment: 'barcode', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/dvcmotion/dvcmotion.module#DvcmotionPageModule', name: 'DvcmotionPage', segment: 'dvcmotion', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] }
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
            __WEBPACK_IMPORTED_MODULE_20__pages_geo_location_geo_location_module__["GeoLocationPageModule"],
            __WEBPACK_IMPORTED_MODULE_21__pages_camera_camera_module__["CameraPageModule"],
            __WEBPACK_IMPORTED_MODULE_22__pages_barcode_barcode_module__["BarcodePageModule"],
            __WEBPACK_IMPORTED_MODULE_23__pages_dvcmotion_dvcmotion_module__["DvcmotionPageModule"],
            __WEBPACK_IMPORTED_MODULE_24__pages_notification_notification_module__["NotificationPageModule"]
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
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_sqlite__["a" /* SQLite */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 190,
	"./af.js": 190,
	"./ar": 191,
	"./ar-dz": 192,
	"./ar-dz.js": 192,
	"./ar-kw": 193,
	"./ar-kw.js": 193,
	"./ar-ly": 194,
	"./ar-ly.js": 194,
	"./ar-ma": 195,
	"./ar-ma.js": 195,
	"./ar-sa": 196,
	"./ar-sa.js": 196,
	"./ar-tn": 197,
	"./ar-tn.js": 197,
	"./ar.js": 191,
	"./az": 198,
	"./az.js": 198,
	"./be": 199,
	"./be.js": 199,
	"./bg": 200,
	"./bg.js": 200,
	"./bn": 201,
	"./bn.js": 201,
	"./bo": 202,
	"./bo.js": 202,
	"./br": 203,
	"./br.js": 203,
	"./bs": 204,
	"./bs.js": 204,
	"./ca": 205,
	"./ca.js": 205,
	"./cs": 206,
	"./cs.js": 206,
	"./cv": 207,
	"./cv.js": 207,
	"./cy": 208,
	"./cy.js": 208,
	"./da": 209,
	"./da.js": 209,
	"./de": 210,
	"./de-at": 211,
	"./de-at.js": 211,
	"./de-ch": 212,
	"./de-ch.js": 212,
	"./de.js": 210,
	"./dv": 213,
	"./dv.js": 213,
	"./el": 214,
	"./el.js": 214,
	"./en-au": 215,
	"./en-au.js": 215,
	"./en-ca": 216,
	"./en-ca.js": 216,
	"./en-gb": 217,
	"./en-gb.js": 217,
	"./en-ie": 218,
	"./en-ie.js": 218,
	"./en-nz": 219,
	"./en-nz.js": 219,
	"./eo": 220,
	"./eo.js": 220,
	"./es": 221,
	"./es-do": 222,
	"./es-do.js": 222,
	"./es.js": 221,
	"./et": 223,
	"./et.js": 223,
	"./eu": 224,
	"./eu.js": 224,
	"./fa": 225,
	"./fa.js": 225,
	"./fi": 226,
	"./fi.js": 226,
	"./fo": 227,
	"./fo.js": 227,
	"./fr": 228,
	"./fr-ca": 229,
	"./fr-ca.js": 229,
	"./fr-ch": 230,
	"./fr-ch.js": 230,
	"./fr.js": 228,
	"./fy": 231,
	"./fy.js": 231,
	"./gd": 232,
	"./gd.js": 232,
	"./gl": 233,
	"./gl.js": 233,
	"./gom-latn": 234,
	"./gom-latn.js": 234,
	"./he": 235,
	"./he.js": 235,
	"./hi": 236,
	"./hi.js": 236,
	"./hr": 237,
	"./hr.js": 237,
	"./hu": 238,
	"./hu.js": 238,
	"./hy-am": 239,
	"./hy-am.js": 239,
	"./id": 240,
	"./id.js": 240,
	"./is": 241,
	"./is.js": 241,
	"./it": 242,
	"./it.js": 242,
	"./ja": 243,
	"./ja.js": 243,
	"./jv": 244,
	"./jv.js": 244,
	"./ka": 245,
	"./ka.js": 245,
	"./kk": 246,
	"./kk.js": 246,
	"./km": 247,
	"./km.js": 247,
	"./kn": 248,
	"./kn.js": 248,
	"./ko": 249,
	"./ko.js": 249,
	"./ky": 250,
	"./ky.js": 250,
	"./lb": 251,
	"./lb.js": 251,
	"./lo": 252,
	"./lo.js": 252,
	"./lt": 253,
	"./lt.js": 253,
	"./lv": 254,
	"./lv.js": 254,
	"./me": 255,
	"./me.js": 255,
	"./mi": 256,
	"./mi.js": 256,
	"./mk": 257,
	"./mk.js": 257,
	"./ml": 258,
	"./ml.js": 258,
	"./mr": 259,
	"./mr.js": 259,
	"./ms": 260,
	"./ms-my": 261,
	"./ms-my.js": 261,
	"./ms.js": 260,
	"./my": 262,
	"./my.js": 262,
	"./nb": 263,
	"./nb.js": 263,
	"./ne": 264,
	"./ne.js": 264,
	"./nl": 265,
	"./nl-be": 266,
	"./nl-be.js": 266,
	"./nl.js": 265,
	"./nn": 267,
	"./nn.js": 267,
	"./pa-in": 268,
	"./pa-in.js": 268,
	"./pl": 269,
	"./pl.js": 269,
	"./pt": 270,
	"./pt-br": 271,
	"./pt-br.js": 271,
	"./pt.js": 270,
	"./ro": 272,
	"./ro.js": 272,
	"./ru": 273,
	"./ru.js": 273,
	"./sd": 274,
	"./sd.js": 274,
	"./se": 275,
	"./se.js": 275,
	"./si": 276,
	"./si.js": 276,
	"./sk": 277,
	"./sk.js": 277,
	"./sl": 278,
	"./sl.js": 278,
	"./sq": 279,
	"./sq.js": 279,
	"./sr": 280,
	"./sr-cyrl": 281,
	"./sr-cyrl.js": 281,
	"./sr.js": 280,
	"./ss": 282,
	"./ss.js": 282,
	"./sv": 283,
	"./sv.js": 283,
	"./sw": 284,
	"./sw.js": 284,
	"./ta": 285,
	"./ta.js": 285,
	"./te": 286,
	"./te.js": 286,
	"./tet": 287,
	"./tet.js": 287,
	"./th": 288,
	"./th.js": 288,
	"./tl-ph": 289,
	"./tl-ph.js": 289,
	"./tlh": 290,
	"./tlh.js": 290,
	"./tr": 291,
	"./tr.js": 291,
	"./tzl": 292,
	"./tzl.js": 292,
	"./tzm": 293,
	"./tzm-latn": 294,
	"./tzm-latn.js": 294,
	"./tzm.js": 293,
	"./uk": 295,
	"./uk.js": 295,
	"./ur": 296,
	"./ur.js": 296,
	"./uz": 297,
	"./uz-latn": 298,
	"./uz-latn.js": 298,
	"./uz.js": 297,
	"./vi": 299,
	"./vi.js": 299,
	"./x-pseudo": 300,
	"./x-pseudo.js": 300,
	"./yo": 301,
	"./yo.js": 301,
	"./zh-cn": 302,
	"./zh-cn.js": 302,
	"./zh-hk": 303,
	"./zh-hk.js": 303,
	"./zh-tw": 304,
	"./zh-tw.js": 304
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
webpackContext.id = 435;

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__elite_api_services__ = __webpack_require__(22);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__elite_api_services__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_settings_service__ = __webpack_require__(57);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__user_settings_service__["a"]; });


//# sourceMappingURL=shared.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_my_teams_my_teams__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tournaments_tournaments__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_user_settings_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_elite_api_services__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pages__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_vibration_vibration__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_geo_location_geo_location__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_camera_camera__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_barcode_barcode__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_dvcmotion_dvcmotion__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_notification_notification__ = __webpack_require__(329);
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
        var _this = this;
        //this.favoriteTeams = this.userSettings.getAllFavorites();
        this.userSettings.getTeams().then(function (result) {
            //alert(JSON.stringify(result));
            _this.favoriteTeams = result;
        });
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
    MyApp.prototype.goBarcode = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_12__pages_barcode_barcode__["a" /* BarcodePage */]);
    };
    MyApp.prototype.goMotion = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_13__pages_dvcmotion_dvcmotion__["a" /* DvcmotionPage */]);
    };
    MyApp.prototype.goNotify = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_14__pages_notification_notification__["a" /* NotificationPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/borakasmer/NavigateIonic/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <ion-list-header>Navigate</ion-list-header>\n      <button menuClose ion-item (click)="goHome()"> <ion-icon name="home"></ion-icon>Home</button>\n      <button menuClose ion-item (click)="goVibration()"> <ion-icon name="pulse"></ion-icon>Vibration</button>\n      <button menuClose ion-item (click)="goGeoLocation()"> <ion-icon name="locate"></ion-icon>Geolocation</button>\n      <button menuClose ion-item (click)="goCamera()"> <ion-icon name="camera"></ion-icon>Camera</button>\n      <button menuClose ion-item (click)="goBarcode()"><ion-icon name="barcode"></ion-icon>Barcode Scanner</button>\n      <button menuClose ion-item (click)="goMotion()"><ion-icon name="game-controller-b"></ion-icon>Device Move</button>\n      <button menuClose ion-item (click)="goNotify()"><ion-icon name="notifications"></ion-icon>Setup Notify</button>\n      <button menuClose ion-item (click)="goTournaments()">Find a Tournament</button>      \n    </ion-list>\n    <ion-list>\n      <ion-list-header>Favorites</ion-list-header>\n      <button menuClose ion-item *ngFor="let fav of favoriteTeams" (click)="goToTeam(fav)">\n        {{fav.team.name}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/borakasmer/NavigateIonic/src/app/app.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tournaments_tournaments__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_elite_api_services__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(35);
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
    function MyTeamsPage(navCtrl, navParams, loadingController, eliteApi, userSettings, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.eliteApi = eliteApi;
        this.userSettings = userSettings;
        this.platform = platform;
    }
    MyTeamsPage.prototype.goToTournament = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tournaments_tournaments__["a" /* TournamentsPage */]);
    };
    MyTeamsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyTeamsPage');
    };
    MyTeamsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('ionViewDidEnter MyTeamsPage');
        this.platform.ready().then(function () {
            //this.favorites = this.userSettings.getAllFavorites();
            _this.userSettings.getTeams().then(function (result) {
                //alert(JSON.stringify(result));
                _this.favorites = result;
            });
            //console.log(this.favorites);
        });
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
        selector: 'page-my-teams',template:/*ion-inline-start:"/Users/borakasmer/NavigateIonic/src/pages/my-teams/my-teams.html"*/'<!--\n  Generated template for the MyTeamsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Elite Schedule</ion-title>\n  </ion-navbar>\n  <ion-toolbar color="secondary">\n    <ion-title>My Teams</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngIf="favorites!=null">\n      Favorites: {{favorites.length}}\n    <ion-list>\n      <ion-list-header class="my-teams-header">Followed Teams</ion-list-header>      \n      <button ion-item *ngFor="let item of favorites" (click)="favoriteTapped($event,item)">\n      <ion-icon name="star"></ion-icon>\n      {{item.team.name}}\n      <p>{{item.tournamentName}}</p>\n    </button>\n    </ion-list>\n    <ion-card-content>\n      <p>To follow more teams, select tournament, then you can follow teams from their team page.\n      </p>\n      <button ion-button round (click)="goToTournament()">\n      <ion-icon name="search"></ion-icon>\n      Find Your Tournament\n  </button>\n    </ion-card-content>\n  </ion-card>\n  <!-- <button ion-button secondary menuToggle>Toggle Menu</button> -->\n  <ion-card *ngIf="favorites==null">    \n    <ion-card-header>No Followed Teams</ion-card-header>\n    <ion-card-content>\n      <p>You are not currently following any teams.</p>\n      <p>First select Tournament, then you can follow teams from their team page.</p>\n      <button ion-button round (click)="goToTournament()">\n          <ion-icon name="search"></ion-icon>\n          Find Your Tournament\n      </button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/borakasmer/NavigateIonic/src/pages/my-teams/my-teams.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__shared_elite_api_services__["a" /* EliteApi */],
        __WEBPACK_IMPORTED_MODULE_5__shared_user_settings_service__["a" /* UserSettings */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
], MyTeamsPage);

//# sourceMappingURL=my-teams.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__ = __webpack_require__(187);
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
    function UserSettings(storage, events, sqlite) {
        this.storage = storage;
        this.events = events;
        this.sqlite = sqlite;
    }
    UserSettings.prototype.favoriteTeam = function (team, tournamentId, tournamentName) {
        var item = { team: team, tournamentId: tournamentId, tournamentName: tournamentName };
        this.storage.set(String(team.id), JSON.stringify(item));
        this.saveTeams(team.id, JSON.stringify(item));
        this.events.publish('favorites:changed');
    };
    UserSettings.prototype.saveTeams = function (id, data) {
        var _this = this;
        this.sqlite.create({
            name: 'data.db',
            location: 'default'
        })
            .then(function (db) {
            console.log("Create DB");
            _this.db = db;
            console.log('Create Table');
            _this.db.executeSql("INSERT INTO `FavoriteTeams` (id,data) VALUES(" + id + ",'" + data + "')", {})
                .then(function () {
                console.log("Data Created");
            })
                .catch(function (e) { return alert("Insert Error: " + JSON.stringify(e)); });
        })
            .catch(function (e) { alert(JSON.stringify(e)); return false; });
    };
    UserSettings.prototype.deleteTeams = function (id) {
        var _this = this;
        this.sqlite.create({
            name: 'data.db',
            location: 'default'
        })
            .then(function (db) {
            console.log("Create DB");
            _this.db = db;
            //alert("Delete Data :" + id);
            _this.db.executeSql("DELETE FROM `FavoriteTeams` WHERE id = " + id, {})
                .then(function () {
                console.log("Data Deleted");
            })
                .catch(function (e) { return alert("Delete Error: " + JSON.stringify(e)); });
        })
            .catch(function (e) { alert(JSON.stringify(e)); return false; });
    };
    UserSettings.prototype.getTeams = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'data.db',
                location: 'default'
            })
                .then(function (db) {
                console.log("Create DB");
                _this.db = db;
                _this.db.executeSql('CREATE TABLE IF NOT EXISTS `FavoriteTeams` (`id` INTEGER NOT NULL, `data` TEXT NOT NULL)', {})
                    .then(function () {
                    console.log('Create Table');
                    //alert('Create Table');
                    _this.db.executeSql('SELECT * FROM FavoriteTeams', {})
                        .then(function (data) {
                        //alert(JSON.stringify(data));
                        if (data == null) {
                            alert("null");
                            return;
                        }
                        if (data.rows) {
                            if (data.rows.length > 0) {
                                var items = [];
                                for (var i = 0; i < data.rows.length; i++) {
                                    //alert(data.rows.item(i).data);
                                    items.push(JSON.parse(data.rows.item(i).data));
                                }
                                //alert(items[1].team.name);
                                return resolve(items);
                                //return items;
                            }
                            else {
                                return resolve(null);
                            }
                        }
                        else {
                            return resolve(null);
                        }
                    });
                    /*  .then((result) => {
                         alert(result[0].tournamentName);
                         return result;
                     }) */
                })
                    .catch(function (e) { return alert("Get Team: " + JSON.stringify(e)); });
            })
                .catch(function (e) { alert("Create Table: " + JSON.stringify(e)); return false; });
        });
    };
    UserSettings.prototype.unforiteTeam = function (team) {
        this.deleteTeams(team.id);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */]])
], UserSettings);

//# sourceMappingURL=user-settings.service.js.map

/***/ })

},[372]);
//# sourceMappingURL=main.js.map
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyTeamsPageModule } from "../pages/my-teams/my-teams.module";
import { TournamentsPageModule } from "../pages/tournaments/tournaments.module";
import { TeamsPageModule } from "../pages/teams/teams.module";
import { TeamDetailPageModule } from "../pages/team-detail/team-detail.module";
import { GamePageModule } from "../pages/game/game.module";
import { MyTeamsPage } from "../pages/my-teams/my-teams";
import { StandingsPageModule } from "../pages/standings/standings.module";
import { TeamHomePageModule } from "../pages/team-home/team-home.module";
import { EliteApi } from "../shared/elite-api.services";
import { HttpModule } from "@angular/http";
import { UserSettings } from "../shared/user-settings.service";
import { IonicStorageModule } from '@ionic/storage';
import { MapPageModule } from "../pages/map/map.module";
import { VibrationPageModule } from "../pages/vibration/vibration.module";
import { GeoLocationPageModule } from "../pages/geo-location/geo-location.module";
import { CameraPageModule } from "../pages/camera/camera.module";
import { BarcodePageModule } from "../pages/barcode/barcode.module";
import { DvcmotionPageModule } from "../pages/dvcmotion/dvcmotion.module";
import { NotificationPageModule } from "../pages/notification/notification.module";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    MyTeamsPageModule,
    TournamentsPageModule,
    TeamsPageModule,
    TeamDetailPageModule,
    GamePageModule,
    StandingsPageModule,
    TeamHomePageModule,
    HttpModule,
    MapPageModule,
    VibrationPageModule,
    GeoLocationPageModule,
    CameraPageModule,
    BarcodePageModule,
    DvcmotionPageModule,
    NotificationPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EliteApi,
    UserSettings,
    SQLite,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }

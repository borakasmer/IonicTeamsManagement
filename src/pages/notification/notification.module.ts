import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationPage } from './notification';
import { LocalNotifications } from '@ionic-native/local-notifications';
@NgModule({
  declarations: [
    NotificationPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationPage),
  ],
  providers:[
    LocalNotifications
  ]
})
export class NotificationPageModule {}

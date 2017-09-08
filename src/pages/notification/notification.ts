import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  results: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private localNotifications: LocalNotifications, private platform: Platform) {
    this.localNotifications.on('click', notification => {
      var data = JSON.parse(notification.data);
      this.results = data.name;
      alert(`Notification recevied! (${data.name})`)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }
  setupNotification() {
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
  }
}

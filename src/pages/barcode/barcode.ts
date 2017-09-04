import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
/**
 * Generated class for the BarcodePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html',
})
export class BarcodePage {

  results: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodePage');
  }

  public scanBarcode() {
    this.barcodeScanner.scan().then((barcodeData) =>
      this.results = barcodeData
    ), (err) => {
      alert('Error : ${err}');
    }
  };
  public reset() {
    this.results = null;
  }
  public lookup() {
    window.open(`http://www.upcindex.com/${this.results.text}`, '_system');
  }
}

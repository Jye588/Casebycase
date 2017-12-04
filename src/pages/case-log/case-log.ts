import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Case } from '../../interfaces/case';

/**
 * Generated class for the CaseLogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-case-log',
  templateUrl: 'case-log.html',
})
export class CaseLogPage {

  keys: string[];
  logs: Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CaseLogPage');
    this.logs=this.navParams.data;
    this.keys = Object.keys(this.logs);
    console.log(this.logs);
  }

}

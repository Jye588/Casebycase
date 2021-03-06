import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';

import { CaseServiceProvider } from '../../providers/case-service/case-service';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-condition-weather',
  templateUrl: 'condition-weather.html',
})
export class ConditionWeatherPage {

  conditions: Array<any> = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public caseService: CaseServiceProvider) {
    this.conditions = [
      {title: "today's weather"},
      {title: 'fine dust information'},
      {title: 'laundry %'}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConditionWeatherPage');
  }

  goToDetail(){
    this.navCtrl.push("ActionPage");
  }
}
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

import { CaseServiceProvider } from '../../providers/case-service/case-service';
import { Action } from '../../interfaces/action';
/**
 * Generated class for the ActionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-action',
  templateUrl: 'action.html',
})
export class ActionPage {

  actions: Array<Action>;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public alertCtrl:AlertController, public caseService: CaseServiceProvider ) {

    this.actions = [
      {title: "gmail", icon: "mail"},
      {title: "push", icon: "alarm"},
      {title: "calendar", icon: "calendar"},
      {title: "print", icon: "print"},
      {title: "turn on", icon: "bulb"},
      {title: "music", icon: "musical-notes"},
      {title: "Cafe", icon: "cafe"},
      {title: "Call", icon: "call"},
      {title: "Car", icon: "car"}
    ];   

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionPage');
  }

  selectAction(act:Action){
    console.log(act.title);
    this.caseService.setNewAction('push');
    this.navCtrl.push("ActionGmailPage");
  }

}

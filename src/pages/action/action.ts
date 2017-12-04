import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

import { CaseServiceProvider } from '../../providers/case-service/case-service';
import { Action } from '../../interfaces/action';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
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

  actions: FirebaseListObservable<any[]>; 

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public alertCtrl:AlertController, public caseService: CaseServiceProvider,
              public af: AngularFireDatabase ) {

    this.actions = af.list('/services/actions');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionPage');
  }

  selectAction(act:Action){
    console.log(act.title);
    this.caseService.setNewAction(act.title);
    if(act.title === 'Push-Notification'){
      this.navCtrl.push("ActionPushPage");
    }
    else{
      this.navCtrl.push("ActionGmailPage");
    }
  }

}

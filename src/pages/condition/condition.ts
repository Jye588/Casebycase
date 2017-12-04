import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

import { CaseServiceProvider } from '../../providers/case-service/case-service';
import { Condition } from '../../interfaces/condition';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
/**
 * Generated class for the ConditionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-condition',
  templateUrl: 'condition.html',
})
export class ConditionPage {

  conditions: FirebaseListObservable<any[]>; 

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public caseService:CaseServiceProvider, public af: AngularFireDatabase) {

    this.conditions = af.list('/services/conditions');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConditionPage');
  }

  selectCondition(cond:Condition){
    this.caseService.setNewCondition(cond.title);
    console.log("condition Selected");
    if(cond.title !== 'News' && cond.title !== 'Weather'){
      this.navCtrl.push("ConditionWeatherPage");
    }
    else {
      let pageName:string = 'Condition' + cond.title+ 'Page';
      this.navCtrl.push(pageName);
    }

  }
}


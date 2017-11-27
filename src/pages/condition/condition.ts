import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

import { CaseServiceProvider } from '../../providers/case-service/case-service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public caseService:CaseServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConditionPage');
  }

  selectCondition(condName:string){
    this.caseService.setNewCondition(condName);
    console.log(condName);
    this.navCtrl.push("ActionPage");
  }
}

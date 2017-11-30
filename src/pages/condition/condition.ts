import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

import { CaseServiceProvider } from '../../providers/case-service/case-service';
import { Condition } from '../../interfaces/condition';
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

  conditions: Array<Condition>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public caseService:CaseServiceProvider) {
    this.conditions = [
      {title: "Weather", icon: "cloud"},
      {title: "Exhibition", icon: "heart"},
      {title: "Navor Blog", icon: "attach"},
      {title: "한국 장학 재단", icon: "school"},
      {title: "Hisnet", icon: "book"},
      {title: "YouTube", icon: "play"},
      {title: "Facebook", icon: "facebook"},
      {title: "Dropbox", icon: "store"},
      {title: "Mellon", icon: "musical-note"}
    ];        

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConditionPage');
  }

  selectCondition(cond:Condition){
    this.caseService.setNewCondition(cond.title);
    console.log("condition Selected");
    this.navCtrl.push("ConditionNewsPage");
  }
}


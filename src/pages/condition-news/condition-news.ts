import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { CaseServiceProvider } from '../../providers/case-service/case-service';

@IonicPage()
@Component({
  selector: 'page-condition-news',
  templateUrl: 'condition-news.html',
})
export class ConditionNewsPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConditionNewsPage');
  }

  goToDetail(){
    this.navCtrl.push("ActionPage");
  }
}
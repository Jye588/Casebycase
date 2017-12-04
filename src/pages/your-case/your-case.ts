import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Case } from '../../interfaces/case';
import { CaseServiceProvider } from '../../providers/case-service/case-service';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'page-your-case',
  templateUrl: 'your-case.html'
})
export class YourCasePage {

  cases: FirebaseListObservable<any[]>; 
  
  constructor(public navCtrl: NavController,
              public caseService: CaseServiceProvider,
              public af: AngularFireDatabase) {
    
    this.cases = af.list('/cases');

  }

  ionViewDidLoad() {
    console.log(this.cases);
  }

  showLog(c:Case){
    this.navCtrl.push("CaseLogPage", c.log);
  }
}

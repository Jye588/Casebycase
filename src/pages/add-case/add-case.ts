import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Case } from '../../interfaces/case';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-add-case',
  templateUrl: 'add-case.html'
})
export class AddCasePage {

  recoms : Array<Case> = [];
  cases: FirebaseListObservable<any[]>; 
  
  constructor(public navCtrl: NavController,
              public af: AngularFireDatabase) {
    
    this.cases = af.list('/cases');
    this.recoms = [
      {title: 'Get an email when new exhibition opens', condition: 'exhibition', action: 'action1'},
      {title: "Share today's IT news articles to your team members", condition: 'News', action: 'action2'},
      {title: 'Turn on vibrate when you enter school', condition: 'GPS', action: 'action3'},
      {title: 'Trun on/off your room lights with one tap', condition: 'IOT', action: 'action4'}
    ];

  }
  
  addCase(){
    this.navCtrl.push("ConditionPage");
  }

  addRecomCase(c: Case){
    console.log(c);
    this.cases.push(c);
  }
}



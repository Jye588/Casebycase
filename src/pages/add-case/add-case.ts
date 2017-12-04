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
      {title: 'Get an email when new exhibition opens', condition: 'exhibition', action: 'gmail'},
      {title: '2', condition: '2', action: 'action2'},
      {title: '3', condition: '3', action: 'action3'},
      {title: '4', condition: '4', action: 'action4'}
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



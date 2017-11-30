//import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { Case } from '../../interfaces/case';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/*
  Generated class for the CaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CaseServiceProvider {

  cases: FirebaseListObservable<any[]>; 
  casesSubject: BehaviorSubject<Array<Case>> = new BehaviorSubject([]);
  cases$: Observable<Array<Case>> = this.casesSubject.asObservable();
  //caseList: Array<Case>;
  newCase:Case;

  constructor(public af: AngularFireDatabase) {
  
    this.cases = af.list('/cases');
    console.log('Hello CaseServiceProvider Provider');
  
    console.log(this.cases);
    
    this.newCase = {title: '', condition: '', action: ''};
    this.refresh();
  }

  getCases(){
    return Promise.resolve(this.cases);
  }

  setNewCondition(cond: string){
    console.log(cond);
    this.newCase={title: '', condition: '', action: ''};
    this.newCase.condition = cond;
  }

  setNewAction(act: string){
    console.log(act);
    this.newCase.action = act;
  }

  setNewTitle(title:string){
    console.log(title);
    this.newCase.title = title;
    this.cases.push(this.newCase);
    this.refresh();
  }

  refresh(){
    //this.casesSubject.next(this.cases);
  }
}

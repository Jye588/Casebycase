//import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { Case } from '../../interfaces/case';

/*
  Generated class for the CaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CaseServiceProvider {

  cases: Array<Case>;
  casesSubject: BehaviorSubject<Array<Case>> = new BehaviorSubject([]);
  cases$: Observable<Array<Case>> = this.casesSubject.asObservable();

  newCase:Case;

  constructor() {
    console.log('Hello CaseServiceProvider Provider');
    this.cases = [
      {title: "case1", condition: "whether", action: "mail"},
      {title: "case2", condition: "whether", action: "push"},
      {title: "case3", condition: "whether", action: "calendar"},
      {title: "case4", condition: "whether", action: "mail"}
    ];

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
    this.casesSubject.next(this.cases);
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Case } from './case';

@Component({
  selector: 'page-your-case',
  templateUrl: 'your-case.html'
})
export class YourCasePage {

  cases: Array<Case> = [];
  
  constructor(public navCtrl: NavController) {
    this.cases = [
      {title: "case1", if: "whether", then: "mail"},
      {title: "case2", if: "whether", then: "push"},
      {title: "case3", if: "whether", then: "calendar"},
      {title: "case4", if: "whether", then: "mail"}];
  }

  ionViewDidLoad() {
    console.log(this.cases);
  }

  
}

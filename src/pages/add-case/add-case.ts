import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-add-case',
  templateUrl: 'add-case.html'
})
export class AddCasePage {

  constructor(public navCtrl: NavController) {
  }
  
  addCase(){
    this.navCtrl.push("ConditionPage");
  }
}

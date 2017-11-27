import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Case } from '../../interfaces/case';
import { CaseServiceProvider } from '../../providers/case-service/case-service';

@Component({
  selector: 'page-your-case',
  templateUrl: 'your-case.html'
})
export class YourCasePage {

  cases: Array<Case>;
  
  constructor(public navCtrl: NavController,
              public caseService: CaseServiceProvider) {
    
    caseService.cases$.subscribe((Cases: Array<Case>) => {
      this.cases=Cases;
    });

  }

  ionViewDidLoad() {
    console.log(this.cases);
  }

  
}

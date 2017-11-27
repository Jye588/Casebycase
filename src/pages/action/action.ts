import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,Nav  } from 'ionic-angular';

import { CaseServiceProvider } from '../../providers/case-service/case-service';

/**
 * Generated class for the ActionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-action',
  templateUrl: 'action.html',
})
export class ActionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public alertCtrl:AlertController, public caseService: CaseServiceProvider, public nav:Nav ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionPage');
  }

  selectAction(actName:string){
    this.caseService.setNewAction(actName);
    console.log(actName);
    this.addCase();
  }

  addCase(){
    let prompt = this.alertCtrl.create({
      title: 'Add Case',
      message: "Enter the case name",
      inputs:[
        {
          name: 'title',
          placeholder: 'mycase'
        },
      ],
      buttons:[
        {
          text: 'Cancel',
          handler: data=>{
            console.log("cancel clicked");
          }
        },
        {
          text: 'Done',
          handler: data=>{
            if(data.title != ''){
              this.caseService.setNewTitle(data.title);
            }
          }
        }
      ]
    });
    prompt.present();
    this.navCtrl.popToRoot();

  }


}

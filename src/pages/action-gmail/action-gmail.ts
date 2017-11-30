import { Component } from '@angular/core';
import { NavController, AlertController,IonicPage} from 'ionic-angular';

import { CaseServiceProvider } from '../../providers/case-service/case-service';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-action-gmail',
  templateUrl: 'action-gmail.html',
})
export class ActionGmailPage {

  actions: Array<any> = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public caseService: CaseServiceProvider) {
    this.actions = [
      {title: 'Send an email'},
      {title: 'Send yourself an email'},
      {title: 'Creat a draft'}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionGmailPage');
  }

  endCase(){
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
              this.navCtrl.popToRoot();       
              this.navCtrl.setRoot(TabsPage);
            }
          }
        }
      ]
    });
    prompt.present();
    //this.navCtrl.popToRoot();

  }

}

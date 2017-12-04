import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, AlertController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import * as moment from 'moment'; 

import { CaseServiceProvider } from '../../providers/case-service/case-service';
import { TabsPage } from '../tabs/tabs';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
/**
 * Generated class for the ActionPushPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-action-push',
  templateUrl: 'action-push.html',
})
export class ActionPushPage {

  notifyTime: any;
  notifications: any[] =[];
  days: any[];
  chosenHours: number;
  chosenMinutes: number;
  logTexts: FirebaseListObservable<any[]>;
  logText: string;

  constructor(public navCtrl: NavController, public platform: Platform, public alertCtrl: AlertController, 
    public localNotifications: LocalNotifications, public caseService: CaseServiceProvider,
    public af: AngularFireDatabase ) {
      this.logTexts = af.list('/cases/-L-T9kegs5QDvauHBIsG/log'); 
      this.logText = this.logTexts.last.toString();
     this.notifyTime = moment(new Date()).format(); 
     // 사용자의 현지 시간대에서 iso 문자열을 얻을 수 있도록 Moment가 처리하고 format 메서드 호출

     this.chosenHours = new Date().getHours();
     this.chosenMinutes = new Date().getMinutes();

     this.days  = [
       {title: 'Monday', dayCode: 1, checked: false},
       {title: 'Tuesday', dayCode: 2, checked: false},
       {title: 'Wednesday', dayCode: 3, checked: false},
       {title: 'Thursday', dayCode: 4, checked: false},
       {title: 'Friday', dayCode: 5, checked: false},
       {title: 'Saturday', dayCode: 6, checked: false},
       {title: 'Sunday', dayCode: 0, checked: true}
     ];
  }

  ionViewDidLoad(){
    console.log("acionPushPage loaded");
  }

  timeChange(time){
    // <ion-datetime> 입력에 대한 변경사항을 수신 (datetime object) 
    this.chosenHours = time.hour; //time.hour.value; 
    this.chosenMinutes = time.minute; //time.minute.value;
  }
  addNotifications(){
    //알림시간 계산 및 스케줄링 

    let currentDate = new Date();
    let currentDay = currentDate.getDay(); //Sunday = 0, Monday = 1, etc.

    for(let day of this.days){

      if(day.checked){

        let firstNotificationTime = new Date(); // 새로운 인스턴스 사용이 Let 사용하는 건가?
        let dayDifference = day.dayCode - currentDay;

        if(dayDifference < 0){

            dayDifference = dayDifference + 7;  // for cases where the day is in the following week
        }

        firstNotificationTime.setHours(firstNotificationTime.getHours() + (24 * (dayDifference)));
        firstNotificationTime.setHours(this.chosenHours);
        firstNotificationTime.setMinutes(this.chosenMinutes);
  
        // 객체 생성 
        let notification = {
               id: day.dayCode,
               title: 'Today Weather',
               text: 'this.logText',
               at: firstNotificationTime,
               every: 'week'
        };
        
        this.notifications.push(notification);


      }
    }

    console.log("Notifications to be scheduled: ", this.notifications);
    
       if(this.platform.is('cordova')){
    
           // Cancel any existing notifications
           this.localNotifications.cancelAll().then(() => {
    
               // Schedule the new notifications
               this.localNotifications.schedule(this.notifications);
    
               this.notifications = [];
    
               let alert = this.alertCtrl.create({
                   title: 'Notifications set',
                   buttons: ['Ok']
               });
    
               alert.present();
    
           });
    
       }
    
    
  }

  cancelAll(){
    // 현재 예약된 모든 알람의 삭제
      this.localNotifications.cancelAll();

      let alert = this.alertCtrl.create({
        title: 'Notifications cancelled',
        buttons: ['OK']
      });

      alert.present();
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
              this.navCtrl.setRoot(TabsPage);
              this.navCtrl.popToRoot();       
            }
          }
        }
      ]
    });
    prompt.present();
  }


}

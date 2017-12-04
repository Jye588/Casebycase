import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { YourCasePage } from '../pages/your-case/your-case';
import { AddCasePage } from '../pages/add-case/add-case';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CaseServiceProvider } from '../providers/case-service/case-service';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
export const firebaseConfig = {
    apiKey: "AIzaSyAslLbNCeMcF14YIX2DGQBMxDhSdTwrMNw",
    authDomain: "casebycase-c672d.firebaseapp.com",
    databaseURL: "https://casebycase-c672d.firebaseio.com",
    projectId: "casebycase-c672d",
    storageBucket: "casebycase-c672d.appspot.com",
    messagingSenderId: "345770592132"
};

@NgModule({
  declarations: [
    MyApp,
    YourCasePage,
    AddCasePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    YourCasePage,
    AddCasePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CaseServiceProvider
  ]
})
export class AppModule {}

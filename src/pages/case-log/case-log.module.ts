import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaseLogPage } from './case-log';

@NgModule({
  declarations: [
    CaseLogPage,
  ],
  imports: [
    IonicPageModule.forChild(CaseLogPage),
  ],
})
export class CaseLogPageModule {}

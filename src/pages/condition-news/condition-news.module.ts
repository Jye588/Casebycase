import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConditionNewsPage } from './condition-news';

@NgModule({
  declarations: [
    ConditionNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(ConditionNewsPage),
  ],
})
export class ConditionNewsPageModule {}

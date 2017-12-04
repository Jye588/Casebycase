import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConditionWeatherPage } from './condition-weather';

@NgModule({
  declarations: [
    ConditionWeatherPage,
  ],
  imports: [
    IonicPageModule.forChild(ConditionWeatherPage),
  ],
})
export class ConditionWeatherPageModule {}

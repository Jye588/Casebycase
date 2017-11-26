import { Component } from '@angular/core';

import { YourCasePage } from '../your-case/your-case';
import { AddCasePage } from '../add-case/add-case';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = YourCasePage;
  tab2Root = AddCasePage;

  constructor() {

  }
}

import { Component, OnInit } from '@angular/core';

import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  items : string[] = [];

  constructor() {}

  ngOnInit() {
    for (let i = 1; i < 51; i++) {
      this.items.push(`Item ${i}`);
    }
  }

}

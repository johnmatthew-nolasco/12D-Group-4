import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ["about.css"]
})
export class AboutPage {
  initValue: number;
  initValue2: number;
  depValue: number;
  depValue2: number;
  depValue3: number;



  constructor(public navCtrl: NavController) {
  }

  compute () {
    this.depValue = (this.initValue * 0.40);
    this.depValue2 = (this.initValue - this.depValue);
    this.depValue3 = ((this.depValue2 + ((this.depValue2 * 0.039)* this.initValue2)) / this.initValue2);
  }
}
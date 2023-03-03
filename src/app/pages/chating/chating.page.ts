import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chating',
  templateUrl: './chating.page.html',
  styleUrls: ['./chating.page.scss'],
})
export class ChatingPage implements OnInit {
  chatingArr: any = [
    {
      me: false,
      value:
        'Hey Rick, I saw your new feature and wanted to touch base with you regarding the flow mentioned.',
    },
    {
      me: true,
      value: 'Hey Noah, go fuck yourself.',
    },
    {
      me: false,
      value: 'Awesome, thanks so much. Sending you an invite now!',
    },
  ];

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}
  back() {
    this.navCtrl.back();
  }
}

import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-deployment',
  templateUrl: './deployment.page.html',
  styleUrls: ['./deployment.page.scss'],
})
export class DeploymentPage implements OnInit {
  constructor(
    private navCtrl: NavController,
    private popCtrl: PopoverController
  ) {}

  ngOnInit() {}
  back() {
    this.navCtrl.back();
  }

  deployClick(item: any) {
    this.navCtrl.navigateForward(['/pages/deployment-view']);
  }
  addClick() {
    this.popCtrl.dismiss();
    this.navCtrl.navigateForward(['/pages/add-deployment']);
  }
}

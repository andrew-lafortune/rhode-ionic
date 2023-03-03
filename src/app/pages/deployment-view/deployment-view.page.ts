import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-deployment-view',
  templateUrl: './deployment-view.page.html',
  styleUrls: ['./deployment-view.page.scss'],
})
export class DeploymentViewPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}
  back() {
    this.navCtrl.back();
  }
}

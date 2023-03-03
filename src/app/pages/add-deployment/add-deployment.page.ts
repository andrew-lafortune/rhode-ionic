import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-deployment',
  templateUrl: './add-deployment.page.html',
  styleUrls: ['./add-deployment.page.scss'],
})
export class AddDeploymentPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}
  back() {
    this.navCtrl.back();
  }
}

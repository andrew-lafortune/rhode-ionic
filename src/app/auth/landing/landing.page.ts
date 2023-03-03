import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}
  loginClick() {
    this.navCtrl.navigateForward(['/auth/login']);
  }
  createClick() {
    this.navCtrl.navigateForward(['/auth/create-account']);
  }
}

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-project-code',
  templateUrl: './project-code.page.html',
  styleUrls: ['./project-code.page.scss'],
})
export class ProjectCodePage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}
  back() {
    this.navCtrl.back();
  }
  cardClick() {
    this.navCtrl.navigateForward(['/pages/tabs']);
  }
}

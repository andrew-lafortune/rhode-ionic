import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { DueDateModalComponent } from 'src/app/core/components/due-date-modal/due-date-modal.component';

@Component({
  selector: 'app-new-feature',
  templateUrl: './new-feature.page.html',
  styleUrls: ['./new-feature.page.scss'],
})
export class NewFeaturePage implements OnInit {
  selectedDueDate = new Date();
  constructor(
    private navCtrl: NavController,
    private modalController: ModalController
  ) {}
  ngOnInit(): void {}
  back() {
    this.navCtrl.back();
  }

  fileUpload(file: any) {
    console.log(file);
  }
  async dueDateClick() {
    const modal = await this.modalController.create({
      component: DueDateModalComponent,
      cssClass: 'due-date-css',
      componentProps: {},
    });
    await modal.present();
    await modal.onWillDismiss().then((x) => {
      console.log(x.role);
      console.log(x.data);
      if (x.role == 'success') {
        this.selectedDueDate = x.data.date;
      }
    });
  }
}

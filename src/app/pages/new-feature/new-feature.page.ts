import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  IonButton,
  IonInput,
  ModalController,
  NavController,
} from '@ionic/angular';
import { DueDateModalComponent } from 'src/app/core/components/due-date-modal/due-date-modal.component';
import { FilePicker } from '@capawesome/capacitor-file-picker';
@Component({
  selector: 'app-new-feature',
  templateUrl: './new-feature.page.html',
  styleUrls: ['./new-feature.page.scss'],
})
export class NewFeaturePage implements OnInit {
  @ViewChild('file', { static: false }) input!: IonInput;
  selectedDueDate = new Date();
  priority: any = 'Priority: Low';
  constructor(
    private navCtrl: NavController,
    private modalController: ModalController
  ) {}
  ngOnInit(): void {}
  back() {
    this.navCtrl.back();
  }

  async fileUpload() {
    const result = await FilePicker.pickFiles();
    const file: any = result.files[0];
    console.log(result.files[0]);

    // const formData = new FormData();
    // if (file.blob) {
    //   const rawFile = new File(file.blob, file.name, {
    //     type: file.mimeType,
    //   });
    //   formData.append('file', rawFile, file.name);
    // }
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
  changePriority(ev: any) {
    this.priority = ev.detail.value;
  }
}

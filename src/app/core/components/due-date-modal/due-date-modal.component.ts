import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-due-date-modal',
  templateUrl: './due-date-modal.component.html',
  styleUrls: ['./due-date-modal.component.scss'],
})
export class DueDateModalComponent implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}
  dateChange(event: any) {
    console.log(event.detail.value);
    this.modalController.dismiss({ date: event.detail.value }, 'success');
  }
}

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  lists = [];
  constructor(
    private navCtrl: NavController,
    private dataService: DataService
  ) {
    let boardId = localStorage.getItem('project');
    if (boardId) {
      this.getList(boardId);
    }
  }
  back() {
    this.navCtrl.back();
  }
  getList(boardId: string) {
    this.dataService
      .getMethod(
        `boards/${boardId}/lists?key=d3a85c83bfa6994a2c9d7fb7bd8b6966&token=ATTAc288567681b4f7a5c10ad58835b094d881f9555a586ae4f405b4db5433b064722F724EC0`
      )
      .then(
        (result) => {
          console.log('here;', result);
          this.lists = result;
        },
        (err) => {
          console.log(err);
        }
      );
  }
}

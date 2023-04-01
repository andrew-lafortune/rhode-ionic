import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
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
        `boards/${boardId}/lists?key=${environment.key}&token=${environment.token}`
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

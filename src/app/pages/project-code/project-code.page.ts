import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/core/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-project-code',
  templateUrl: './project-code.page.html',
  styleUrls: ['./project-code.page.scss'],
})
export class ProjectCodePage implements OnInit {
  projects = [];
  constructor(
    private navCtrl: NavController,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.getBoards();
  }
  back() {
    this.navCtrl.back();
  }
  cardClick(id: string) {
    localStorage.setItem('project', id);
    this.navCtrl.navigateForward(['/pages/tabs']);
  }
  getBoards() {
    this.dataService
      .getMethod(
        `members/noahbrammer3/boards?key=${environment.key}&token=${environment.token}`
      )
      .then(
        (result) => {
          console.log('here;', result);
          this.projects = result;
        },
        (err) => {
          console.log(err);
        }
      );
  }
}

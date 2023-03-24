import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/core/services/data.service';

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
        'members/noahbrammer3/boards?key=d3a85c83bfa6994a2c9d7fb7bd8b6966&token=ATTAc288567681b4f7a5c10ad58835b094d881f9555a586ae4f405b4db5433b064722F724EC0'
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

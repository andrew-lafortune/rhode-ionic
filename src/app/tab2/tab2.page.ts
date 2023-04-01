import { Component, OnInit, ViewChild } from '@angular/core';

import { NavController, PopoverController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  baseChart: any;
  lineChart: any;
  tableChart: any = [];
  lists: any = [];
  sprintArray: any = [];
  constructor(
    private navCtrl: NavController,
    private popCtrl: PopoverController,

    private dataService: DataService
  ) {
    let boardId = localStorage.getItem('project');
    if (boardId) {
      this.getList(boardId);
    }
  }
  ngOnInit(): void {
    this.tableCharts();
    this.lineCharts();
    this.baseCharts();
  }
  back() {
    this.navCtrl.back();
  }
  segmentChanged(ev: any) {
    console.log(ev.detail.value);
  }

  story01Click() {
    this.navCtrl.navigateForward(['/pages/story-first']);
  }
  newFeatureClick() {
    this.popCtrl.dismiss();
    this.navCtrl.navigateForward(['/pages/new-feature']);
  }
  lineCharts() {
    this.lineChart = {
      title: {
        text: '',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['', '', '', '', ''],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'resource name',
          type: 'line',
          stack: 'Total',
          data: ['res1', 'res1', 'res1', 'res2', 'res1', 'res1', 'res1'],
        },
        {
          name: 'Hourly rate',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: 'cost',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410],
        },
      ],
    };
  }
  baseCharts() {}
  tableCharts() {
    this.tableChart = [
      {
        label: 'Story 1',
        m: 'lightblue',
        t: 'lightblue',
        w: 'lightblue',
        th: 'lightblue',
        f: 'lightblue',
        m2: 'lightblue',
        t2: 'lightblue',
        th2: 'lightblue',
        f2: 'yellow',
      },
      {
        label: 'Story 2',
        m: 'lightblue',
        t: 'lightblue',
        w: 'lightblue',
        th: 'yellow',
        f: 'yellow',
        m2: 'green',
        t2: '',
        th2: '',
        f2: '',
      },
      {
        label: 'Story 3',
        m: 'lightblue',
        t: 'lightblue',
        w: 'red',
        th: 'red',
        f: 'lightblue',
        m2: 'yellow',
        t2: 'green',
        th2: '',
        f2: '',
      },
      {
        label: 'Story 4',
        m: 'lightblue',
        t: 'lightblue',
        w: 'lightblue',
        th: '',
        f: '',
        m2: '',
        t2: '',
        th2: '',
        f2: '',
      },
      {
        label: 'Story 5',
        m: 'lightblue',
        t: 'lightblue',
        w: 'lightblue',
        th: '',
        f: '',
        m2: '',
        t2: '',
        th2: '',
        f2: '',
      },
      {
        label: 'Story 6',
        m: '',
        t: '',
        w: '',
        th: '',
        f: '',
        m2: '',
        t2: '',
        th2: '',
        f2: '',
      },
      {
        label: 'Story 7',
        m: '',
        t: '',
        w: '',
        th: '',
        f: '',
        m2: '',
        t2: '',
        th2: '',
        f2: '',
      },
    ];
  }
  getList(boardId: string) {
    this.dataService
      .getMethod(
        `boards/${boardId}/customFields?key=${environment.key}&token=${environment.token}`
      )
      .then(
        (result) => {
          console.log('here;', result);
          this.lists = result;
          result.forEach((element: any) => {
            if (element.id === '634ae12097a32700991d7c5f') {
              this.sprintArray = element.options;
            }
          });

          this.baseChart = {
            xAxis: {
              type: 'category',
              data: this.sprintArray.map((x: any) => x.value.text),
            },
            yAxis: {
              type: 'value',
            },
            series: [
              {
                data: [120, 200, 150, 80, 70, 10, 12, 30, 20, 50],
                type: 'bar',
              },
            ],
          };
          console.log(this.sprintArray);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}

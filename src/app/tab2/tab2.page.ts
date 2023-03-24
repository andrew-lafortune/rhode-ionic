import { Component, OnInit, ViewChild } from '@angular/core';

import { NavController, PopoverController } from '@ionic/angular';
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
          name: 'Email',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: 'Union Ads',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: 'Video Ads',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410],
        },
      ],
    };
  }
  baseCharts() {
    this.baseChart = {
      xAxis: {
        type: 'category',
        data: ['Sprint 1', 'Sprint 2', 'Sprint 3', 'Sprint 4', 'Sprint 5'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [120, 200, 150, 80, 70],
          type: 'bar',
        },
      ],
    };
  }
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

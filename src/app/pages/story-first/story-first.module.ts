import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StoryFirstPageRoutingModule } from './story-first-routing.module';
import { StoryFirstPage } from './story-first.page';
import { NgChartsModule } from 'ng2-charts';
import { SharedModule } from 'src/app/core/components/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoryFirstPageRoutingModule,
    NgChartsModule,
    SharedModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  declarations: [StoryFirstPage],
})
export class StoryFirstPageModule {}

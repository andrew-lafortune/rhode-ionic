import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectCodePageRoutingModule } from './project-code-routing.module';

import { ProjectCodePage } from './project-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectCodePageRoutingModule
  ],
  declarations: [ProjectCodePage]
})
export class ProjectCodePageModule {}

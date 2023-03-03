import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeploymentViewPageRoutingModule } from './deployment-view-routing.module';

import { DeploymentViewPage } from './deployment-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeploymentViewPageRoutingModule
  ],
  declarations: [DeploymentViewPage]
})
export class DeploymentViewPageModule {}

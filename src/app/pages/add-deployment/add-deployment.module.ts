import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDeploymentPageRoutingModule } from './add-deployment-routing.module';

import { AddDeploymentPage } from './add-deployment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDeploymentPageRoutingModule
  ],
  declarations: [AddDeploymentPage]
})
export class AddDeploymentPageModule {}

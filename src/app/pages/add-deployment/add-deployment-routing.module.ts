import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDeploymentPage } from './add-deployment.page';

const routes: Routes = [
  {
    path: '',
    component: AddDeploymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDeploymentPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeploymentViewPage } from './deployment-view.page';

const routes: Routes = [
  {
    path: '',
    component: DeploymentViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeploymentViewPageRoutingModule {}

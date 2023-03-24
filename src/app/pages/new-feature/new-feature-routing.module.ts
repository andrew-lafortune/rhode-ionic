import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewFeaturePage } from './new-feature.page';

const routes: Routes = [
  {
    path: '',
    component: NewFeaturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewFeaturePageRoutingModule {}

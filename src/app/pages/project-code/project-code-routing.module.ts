import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectCodePage } from './project-code.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectCodePageRoutingModule {}

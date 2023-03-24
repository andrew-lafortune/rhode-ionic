import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoryFirstPage } from './story-first.page';

const routes: Routes = [
  {
    path: '',
    component: StoryFirstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoryFirstPageRoutingModule {}

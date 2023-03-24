import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage,
    children: [
      {
        path: '',
        redirectTo: 'project-code',
        pathMatch: 'full',
      },
      {
        path: 'project-code',
        loadChildren: () =>
          import('./project-code/project-code.module').then(
            (m) => m.ProjectCodePageModule
          ),
      },
      {
        path: 'tabs',
        loadChildren: () =>
          import('../tabs/tabs.module').then((m) => m.TabsPageModule),
      },
      {
        path: 'chating',
        loadChildren: () =>
          import('./chating/chating.module').then((m) => m.ChatingPageModule),
      },
      {
        path: 'deployment-view',
        loadChildren: () =>
          import('./deployment-view/deployment-view.module').then(
            (m) => m.DeploymentViewPageModule
          ),
      },
      {
        path: 'add-deployment',
        loadChildren: () =>
          import('./add-deployment/add-deployment.module').then(
            (m) => m.AddDeploymentPageModule
          ),
      },
      {
        path: 'story-first',
        loadChildren: () =>
          import('./story-first/story-first.module').then(
            (m) => m.StoryFirstPageModule
          ),
      },
      {
        path: 'new-feature',
        loadChildren: () =>
          import('./new-feature/new-feature.module').then(
            (m) => m.NewFeaturePageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}

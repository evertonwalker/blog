import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutRouterComponent } from './components/layout-router/layout-router.component';

const routes: Routes = [
  {
    path: '', component: LayoutRouterComponent, children:
      [
        {
          path: '', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
        },
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './page/default.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [
    {
      path: 'dashboard',
      loadChildren: () =>
        import('../../modules/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }

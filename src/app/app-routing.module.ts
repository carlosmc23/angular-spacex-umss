import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchesComponent } from './launches/launches.component';
import { LatestLaunchComponent } from './latest-launch/latest-launch.component';
const routes: Routes = [
  {
    path: '',
    component: LaunchesComponent
  },
  {
    path: 'latest',
    component: LatestLaunchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

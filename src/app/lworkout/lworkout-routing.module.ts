import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LworkoutPage } from './lworkout.page';

const routes: Routes = [
  {
    path: '',
    component: LworkoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LworkoutPageRoutingModule {}

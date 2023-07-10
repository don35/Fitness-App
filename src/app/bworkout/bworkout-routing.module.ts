import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BworkoutPage } from './bworkout.page';

const routes: Routes = [
  {
    path: '',
    component: BworkoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BworkoutPageRoutingModule {}

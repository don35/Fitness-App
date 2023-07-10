import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LworkoutPageRoutingModule } from './lworkout-routing.module';

import { LworkoutPage } from './lworkout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LworkoutPageRoutingModule
  ],
  declarations: [LworkoutPage]
})
export class LworkoutPageModule {}

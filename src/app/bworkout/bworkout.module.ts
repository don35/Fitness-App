import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BworkoutPageRoutingModule } from './bworkout-routing.module';

import { BworkoutPage } from './bworkout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BworkoutPageRoutingModule
  ],
  declarations: [BworkoutPage]
})
export class BworkoutPageModule {}

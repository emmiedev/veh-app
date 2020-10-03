import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralsPageRoutingModule } from './generals-routing.module';

import { GeneralsPage } from './generals.page';
import { NbButtonModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralsPageRoutingModule,
    NbButtonModule
  ],
  declarations: [GeneralsPage]
})
export class GeneralsPageModule {}

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MediaPageRoutingModule } from './media-routing.module';

import { MediaPage } from './media.page';
import { CustomComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MediaPageRoutingModule,
    CustomComponentsModule
  ],
  declarations: [
    MediaPage,
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MediaPageModule {}

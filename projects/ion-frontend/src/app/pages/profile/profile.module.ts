import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { CustomComponentsModule } from 'src/app/shared/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    CustomComponentsModule
  ],
  declarations: [
    ProfilePage,
  ],
  entryComponents:[
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ProfilePageModule {}

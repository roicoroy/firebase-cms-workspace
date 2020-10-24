import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
// import { TabsComponent } from 'src/app/shared/components/tabs/tabs.component';
// import { CustomComponentsModule } from 'src/app/shared/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // CustomComponentsModule
  ],
  declarations: [
    HomePage,
  ],
  entryComponents: [
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class HomePageModule { }

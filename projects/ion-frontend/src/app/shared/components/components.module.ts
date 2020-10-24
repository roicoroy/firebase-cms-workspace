import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
    ],
    declarations: [
        TabsComponent
    ],
    entryComponents: [
        TabsComponent
    ],
    exports: [
        TabsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class CustomComponentsModule {
}
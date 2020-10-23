import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseOptions, FirebaseOptionsToken } from 'angularfire2';
import { IonFireAdminService } from './fire-admin.service';
import { NgxMasonryModule } from './shared/ngx-masonry/src/public-api';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    NgxMasonryModule
  ],
  providers: [
    // IonFireAdminService,
    // {
    //   provide: FirebaseOptionsToken,
    //   useFactory: IonFireAdminService.getFirebaseConfig,
    //   deps: [IonFireAdminService]
    // },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // static initialize(firebaseConfig: FirebaseOptions): any {
  //   return {
  //     ngModule: AppModule,
  //     providers: [
  //       IonFireAdminService,
  //       {
  //         provide: FirebaseOptionsToken,
  //         useValue: firebaseConfig
  //       }
  //     ]
  //   };
  // }
}


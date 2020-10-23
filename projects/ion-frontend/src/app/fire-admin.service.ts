import { Injectable, Inject } from '@angular/core';
import { FirebaseOptionsToken } from '@angular/fire';

@Injectable()
export class IonFireAdminService {

  constructor(@Inject(FirebaseOptionsToken) private firebaseConfig) { }

  static getFirebaseConfig(self: IonFireAdminService) {
    return self.firebaseConfig;
  }
}

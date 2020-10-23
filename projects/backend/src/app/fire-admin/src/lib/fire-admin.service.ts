import { Injectable, Inject } from '@angular/core';
import { FirebaseOptionsToken } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class FireAdminService {

  constructor(@Inject(FirebaseOptionsToken) private firebaseConfig) { }

  static getFirebaseConfig(self: FireAdminService) {
    return self.firebaseConfig;
  }

}

import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

export const firebase = {
 apiKey: "AIzaSyCGxRu827KEnSPasRnp-Yvapdepqik1bM4",
  authDomain: "mocos-co.firebaseapp.com",
  databaseURL: "https://mocos-co.firebaseio.com",
  projectId: "mocos-co",
  storageBucket: "mocos-co.appspot.com",
  messagingSenderId: "56858106690",
  appId: "1:56858106690:web:e3512c615d0b531c9586db",
  measurementId: "G-FTG117YCHZ"
};

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule
  ],
  exports: [
    AngularFirestoreModule
  ]
})
export class FirebaseModule { }
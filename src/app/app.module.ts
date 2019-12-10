import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { IonicRatingModule } from 'ionic4-rating';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";


var firebaseConfig = {
  apiKey: "AIzaSyAnUNS7d8J3qzagBTOpHwp_RAOFfd4-Qs0",
  authDomain: "fletesapp-ee631.firebaseapp.com",
  databaseURL: "https://fletesapp-ee631.firebaseio.com",
  projectId: "fletesapp-ee631",
  storageBucket: "fletesapp-ee631.appspot.com",
  messagingSenderId: "1082546361054",
  appId: "1:1082546361054:web:b0d6b4c45488bc3417a84f"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule, IonicModule.forRoot(), AppRoutingModule,IonicRatingModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

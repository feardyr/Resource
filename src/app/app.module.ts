import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
//import { jsonwebtoken } from 'node_modules/js-tokens/jsonwebtoken'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TabsComponent } from './composants/tabs/tabs.component';
import { TLSSocket } from 'tls';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicStorageModule } from "@ionic/storage";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent,],
  imports: [BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      ReactiveFormsModule, 
      FormsModule,
      IonicStorageModule.forRoot(),
      HttpClientModule

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

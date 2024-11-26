import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChaComponent } from './cha/cha.component';
import { ConBeComponent } from './con-be/con-be.component';

@NgModule({
  declarations: [
    AppComponent,
    ChaComponent,
    ConBeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

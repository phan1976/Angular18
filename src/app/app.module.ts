import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChaComponent } from './cha/cha.component';
import { ConComponent } from './con/con.component';
import { ConBeComponent } from './con-be/con-be.component';

@NgModule({
  declarations: [
    AppComponent,
    ChaComponent,
    ConComponent,
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

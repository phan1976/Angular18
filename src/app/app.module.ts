import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataAppComponent } from './data-app/data-app.component';
import { HomeComponent } from './home/home.component';
import { DataApp1Component } from './data-app1/data-app1.component';

@NgModule({
  declarations: [
    AppComponent,
    DataAppComponent,
    HomeComponent,
    DataApp1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

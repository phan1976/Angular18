import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OnSalePipe } from './on-sale.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HightLightDirective } from './Directives/hight-light.directive';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveForm2Component } from './reactive-form2/reactive-form2.component';
import { ReactiveForm3Component } from './reactive-form3/reactive-form3.component';
import { ReactiveForm4Component } from './reactive-form4/reactive-form4.component';
import { GetDataComponent } from './get-data/get-data.component';
import { MeinDataComponent } from './mein-data/mein-data.component';
import { MeinData2Component } from './mein-data2/mein-data2.component';
import { PostDataComponent } from './post-data/post-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OnSalePipe,
    PageNotFoundComponent,
    HightLightDirective,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ReactiveForm2Component,
    ReactiveForm3Component,
    ReactiveForm4Component,
    GetDataComponent,
    MeinDataComponent,
    MeinData2Component,
    PostDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveForm2Component } from './reactive-form2/reactive-form2.component';
import { ReactiveForm3Component } from './reactive-form3/reactive-form3.component';
import { ReactiveForm4Component } from './reactive-form4/reactive-form4.component';
import { GetDataComponent } from './get-data/get-data.component';
import { MeinDataComponent } from './mein-data/mein-data.component';

const routes: Routes = [{path:'about',component:AboutComponent},
  {path:'home', component:HomeComponent},
  {path:'templateForm', component:TemplateDrivenFormComponent},
  {path:'reactiveForm', component:ReactiveFormComponent},
  {path:'reactiveForm2', component:ReactiveForm2Component},
  {path:'reactiveForm3', component:ReactiveForm3Component},
  {path:'reactiveForm4', component:ReactiveForm4Component},
  {path:'getdata', component:GetDataComponent},
  {path:'meindata', component:MeinDataComponent},
  {path:'', component:HomeComponent},
  {path:'notfound',component:PageNotFoundComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

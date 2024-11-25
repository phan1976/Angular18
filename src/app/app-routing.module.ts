import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataAppComponent } from './data-app/data-app.component';
import { HomeComponent } from './home/home.component';
import { DataApp1Component } from './data-app1/data-app1.component';

const routes: Routes = [{path:'data', component: DataAppComponent},
  {path:'data1', component: DataApp1Component},
  {path:'home', component: HomeComponent},
  {path:'', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

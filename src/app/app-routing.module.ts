import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataAppComponent } from './data-app/data-app.component';


const routes: Routes = [{path:'data', component: DataAppComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
  
 }

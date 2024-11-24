import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataAppComponent } from './data-app/data-app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:'data', component: DataAppComponent},
  {path:'', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

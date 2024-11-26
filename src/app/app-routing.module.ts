import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChaComponent } from './cha/cha.component';
import { ConBeComponent } from './con-be/con-be.component';

const routes: Routes = [{path:'cha',component:ChaComponent},
  {path:'con',component:ConBeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

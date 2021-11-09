import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { VegetablesComponent } from './components/vegetables/vegetables.component';

const routes: Routes = [
  {path:'home', component:BodyComponent},
  {path:'vegetables', component:VegetablesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

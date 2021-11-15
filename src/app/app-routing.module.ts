import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { CartComponent } from './components/cart/cart.component';
import { VegetablesComponent } from './components/vegetables/vegetables.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch: 'full' },
  {path:'home', component:BodyComponent},
  {path:'vegetables', component:VegetablesComponent},
  {path:'cart', component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductsdetailsComponent } from './productsdetails/productsdetails.component';
import { OpencodeComponent } from './opencode/opencode.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'products/:name',component:ProductsComponent},
  {path:'productsdetails/:id',component:ProductsdetailsComponent},
  {path:'opencode',component:OpencodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

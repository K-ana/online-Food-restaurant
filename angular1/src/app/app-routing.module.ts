import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';


const routes: Routes = [
  {path:'products', component:ProductsComponent },
  {path:'contact', component:ContactComponent},
  {path:'about', component:AboutComponent},
  {path:'home', component:HomeComponent},
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"products/details/:id", component:DetailsComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
